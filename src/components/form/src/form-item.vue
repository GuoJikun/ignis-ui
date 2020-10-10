<template>
    <div class="ins-form-item">
        <label
            v-if="label"
            class="ins-form-item-label"
            :class="[`ins-form-item-label-${form.labelPosition}`]"
            :style="{ width: getWidth }"
            >{{ label }}</label
        >
        <div class="ins-form-item-content" :style="{ marginLeft: getWidth }">
            <slot></slot>
            <div v-if="validateState === 'error'" class="ins-form-item-message">
                {{ validateMessage }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import AsyncValidator from "async-validator";
import { defineComponent, inject, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
    name: `${prefix}FormItem`,
    props: {
        label: {
            type: String,
            default: "",
        },
        prop: String,
        labelWidth: [String, Number],
    },
    setup(props) {
        const form: any = inject("form");
        const data = reactive({
            isRequired: false, // 是否为必填
            validateState: "", // 校验状态
            validateMessage: "", // 校验不通过时的提示信息
        });
        if (props.prop) {
            const initialValue = form.model[props.prop];
        }
        return { form, ...toRefs(data), initialValue };
    },
    // 组件渲染时，将实例缓存在 Form 中
    mounted() {
        // 如果没有传入 prop，则无需校验，也就无需缓存
        if (this.prop) {
            this.form.onFormItemAdd(this);
            // 设置初始值，以便在重置时恢复默认值
            this.initialValue = this.fieldValue;
            this.setRules();
        }
    },
    methods: {
        // 重置数据
        resetField() {
            this.validateState = "";
            this.validateMessage = "";

            this.form.model[this.prop] = this.initialValue;
        },
        // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
        getRules() {
            let formRules = this.form.rules;

            formRules = formRules ? formRules[this.prop] : [];

            return [].concat(formRules || []);
        },
        // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
        getFilteredRule(trigger) {
            const rules = this.getRules();
            return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
        },
        /**
         * 校验数据
         * @param trigger 校验类型
         * @param callback 回调函数
         */
        validate(trigger, callback = function() {}) {
            const rules = this.getFilteredRule(trigger);

            if (!rules || rules.length === 0) {
                return true;
            }

            // 设置状态为校验中
            this.validateState = "validating";

            // 以下为 async-validator 库的调用方法
            const descriptor = {};
            descriptor[this.prop] = rules;

            const validator = new AsyncValidator(descriptor);
            const model = {};

            model[this.prop] = this.fieldValue;

            validator.validate(model, { firstFields: true }, errors => {
                this.validateState = !errors ? "success" : "error";
                this.validateMessage = errors ? errors[0].message : "";

                callback(this.validateMessage);
            });
        },
        onFieldBlur() {
            this.validate("blur");
        },
        onFieldChange() {
            this.validate("change");
        },
        setRules() {
            const rules = this.getRules();
            if (rules.length) {
                rules.every(rule => {
                    // 如果当前校验规则中有必填项，则标记出来
                    this.isRequired = rule.required;
                });
            }
            this.$on("on-form-blur", this.onFieldBlur);
            this.$on("on-form-change", this.onFieldChange);
        },
    },
    computed: {
        // 从 Form 的 model 中动态得到当前表单组件的数据
        fieldValue(): any {
            return this.form.model[this.prop];
        },
        getWidth(): string {
            const width = this.labelWidth || this.form.labelWidth || false;
            return width ? width + "px" : "auto";
        },
    },
    // 组件销毁前，将实例从 Form 的缓存中移除
    beforeUnmount() {
        this.form.onFormItemRemove(this);
    },
});
</script>

<style lang="scss">
@import "@/style/form-item.scss";
</style>

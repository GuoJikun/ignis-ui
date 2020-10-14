<template>
    <div
        class="ins-input"
        ref=""
        :class="[
            { 'ins-input--suffix': !!suffixIcon || isClose },
            { 'is-disabled': disabled },
            getSize,
        ]"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
    >
        <slot name="prefix" v-if="type === 'text' && prefixIcon">
            <ins-icon :name="prefixIcon"></ins-icon>
        </slot>
        <input
            v-if="readonly"
            readonly
            class="ins-input__inner"
            :max="max"
            :min="min"
            :placeholder="placeholder"
            :disabled="disabled"
            :type="type"
            :value="cur"
            @focus="fixed"
            @blur="blur"
            @input="inputs"
        />
        <input
            v-else
            class="ins-input__inner"
            :max="max"
            :min="min"
            :placeholder="placeholder"
            :disabled="disabled"
            :type="type"
            :value="cur"
            @focus="fixed"
            @blur="blur"
            @input="inputs"
        />
        <span class="ins-input__suffix" v-if="clearable || suffixIcon">
            <slot name="suffix" v-if="type === 'text' && suffixIcon">
                <ins-icon :name="suffixIcon" class="ins-input__icon"></ins-icon>
            </slot>
            <ins-icon name="x" class="ins-input-close" v-if="isClose" @click="clear"></ins-icon>
        </span>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import InsIcon from "@/components/icon/index";
import { computed, defineComponent, reactive, toRefs, watchEffect } from "vue";

export default defineComponent({
    name: `${prefix}Input`,
    components: { InsIcon },
    props: {
        modelValue: [String, Number],
        clearable: Boolean,
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        prefixIcon: String,
        suffixIcon: String,
        type: {
            type: String,
            default: "text",
        },
        size: {
            type: String,
            validator: (value: string) => {
                return ["large", "small", "mini", "default"].includes(value);
            },
        },
        max: Number,
        min: Number,
        placeholder: String,
    },
    setup(props, { emit, attrs }) {
        console.log(attrs, "attrs");
        const data: Record<string, any> = reactive({ cur: props.modelValue, isFocus: false });
        const handleClose = () => {
            data.isFocus = false;
        };
        // computed
        const isClose = computed(() => {
            return props.clearable && data.isFocus && data.cur;
        });
        const getSize = computed(() => {
            if (props.size) {
                return `ins-input-${props.size}`;
            } else {
                return "";
            }
        });
        // watch
        watchEffect(() => {
            data.cur = props.modelValue;
        });
        // methods
        const mouseEnter = () => {
            data.isFocus = true;
        };
        const mouseLeave = () => {
            data.isFocus = false;
        };
        const fixed = () => {
            emit("focus", data.cur);
        };
        const blur = () => {
            emit("blur", data.cur);
            // this.dispatch("FormItem", "on-form-blur", this.cur);
        };
        const inputs = () => {
            data.cur = props.modelValue;
            emit("change", data.cur);
            emit("input", data.cur);
            // this.dispatch("FormItem", "on-form-change", ev.target.value);
        };
        const clear = () => {
            data.cur = null;
            emit("change", data.cur);
            // this.dispatch("FormItem", "on-form-change", this.cur);
            emit("clear");
        };
        return {
            ...toRefs(data),
            handleClose,
            isClose,
            getSize,
            mouseEnter,
            mouseLeave,
            fixed,
            blur,
            clear,
            inputs,
        };
    },
});
</script>

<style lang="scss">
@import "@/style/input.scss";
</style>

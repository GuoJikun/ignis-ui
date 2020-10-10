<template>
    <div class="ins-form">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: `${prefix}Form`,
    props: {
        labelWidth: [String, Number],
        model: Object,
        rules: Object,
        labelPosition: {
            type: String,
            default: "left",
            validator(value: string) {
                return ["left", "right", "top"].includes(value);
            },
        },
        size: {
            type: String,
            validator(value: string) {
                return ["lange", "medium", "small", "mini"].includes(value);
            },
        },
    },
    provide() {
        return {
            form: this,
        };
    },
    setup() {
        const fields: any = ref([]);
        const onFormItemAdd = (field: any) => {
            if (field) fields.value.push(field);
        };
        const onFormItemRemove = (field: { prop: any }) => {
            if (field.prop) fields.value.splice(fields.value.indexOf(field), 1);
        };

        return { fields, onFormItemAdd, onFormItemRemove };
    },
    methods: {
        // 公开方法：全部重置数据
        resetFields() {
            this.fields.forEach((field: { resetField: () => void }) => {
                field.resetField();
            });
        },
        // 公开方法：全部校验数据，支持 Promise
        validate(callback: (arg0: boolean) => void) {
            return new Promise((resolve, reject) => {
                let valid = true;
                let count = 0;
                this.fields.forEach(
                    (field: { validate: (arg0: string, arg1: (errors: any) => void) => void }) => {
                        field.validate("", errors => {
                            if (errors) {
                                valid = false;
                                reject(valid);
                            }
                            if (++count === this.fields.length) {
                                // 全部完成
                                resolve(valid);
                                if (typeof callback === "function") {
                                    callback(valid);
                                }
                            }
                        });
                    }
                );
            });
        },
    },
});
</script>

<style lang="scss">
@import "@/style/form.scss";
</style>

<template>
    <div class="ins-form">
        <slot></slot>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}Form`,
    props: {
        labelWidth: [String, Number],
        model: Object,
        rules: Object,
        labelPosition: {
            type: String,
            default: "left",
            validator(value) {
                return ["left", "right", "top"].indexOf(value) !== -1;
            },
        },
        size: {
            type: String,
            validator(value) {
                return ["lange", "medium", "small", "mini"].indexOf(value) !== -1;
            },
        },
    },
    provide() {
        return {
            form: this,
        };
    },
    data() {
        return {
            fields: [],
        };
    },
    created() {
        this.$on("on-form-item-add", field => {
            if (field) this.fields.push(field);
        });
        this.$on("on-form-item-remove", field => {
            if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
        });
    },
    methods: {
        // 公开方法：全部重置数据
        resetFields() {
            this.fields.forEach(field => {
                field.resetField();
            });
        },
        // 公开方法：全部校验数据，支持 Promise
        validate(callback) {
            return new Promise((resolve, reject) => {
                let valid = true;
                let count = 0;
                this.fields.forEach(field => {
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
                });
            });
        },
    },
};
</script>

<style lang="scss">
@import "@/style/form.scss";
</style>

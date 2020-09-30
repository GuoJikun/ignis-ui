<template>
    <label class="ins-radio" :class="[]">
        <span class="ins-radio__input" :class="[{ 'is-checked': isChecked }, { 'is-disabled': isDisabled }]">
            <span class="ins-radio__inner"></span>
            <input :value="label" :name="names" type="radio" tabIndex="-1" hidden @change="handleChange" />
        </span>

        <span class="ins-radio__label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import Emitter from "@/mixins-/emitter.js";
import { findComponentUpward } from "@/utils/findComponent.js";
export default {
    name: `${prefix}Radio`,
    mixins-: [Emitter],
    model: {
        props: "value",
        event: "change",
    },
    componentName: `${prefix}Radio`,
    props: {
        value: {
            type: [Number, String, Boolean],
        },
        label: {
            type: [String, Number, Boolean],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: String,
    },
    data() {
        return {
            curValue: null,
        };
    },
    methods: {
        handleChange(ev) {
            if (this.isDisabled) {
                return false;
            }
            const parent = findComponentUpward(this, "RadioGroup");
            if (parent) {
                parent.updateValue(this.label);
            } else {
                this.curValue = ev.target.value;
                this.$emit("change", this.curValue);
                this.dispatch("FormItem", "on-form-change", this.curValue);
            }
        },
    },
    computed: {
        isChecked() {
            let bool = false;
            const parent = findComponentUpward(this, "RadioGroup");
            if (parent) {
                bool = parent.curValue === this.label;
            } else {
                bool = this.curValue === this.label;
            }

            return bool;
        },
        names() {
            const parent = findComponentUpward(this, "RadioGroup");
            const flag = parent && parent.$options.name === "RadioGroup";
            if (flag) {
                return this.name || parent.value;
            } else {
                return this.name || this.curValue;
            }
        },
        isDisabled() {
            const parent = findComponentUpward(this, "RadioGroup");
            const flag = parent && parent.$options.name === "RadioGroup";
            if (flag) {
                return parent.disabled;
            } else {
                return this.disabled;
            }
        },
    },
    watch: {
        value: {
            handler(val) {
                this.curValue = val;
            },
            immediate: true,
        },
    },
};
</script>
<style lang="scss">
@import "@/style/common/var.scss";

.ins-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    user-select: none;
    &__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
    }
    &__inner {
        border: 1px solid $ins--radio-border-color;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: $ins--color-white;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after {
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: #fff;
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.15s ease-in;
        }
    }
    &__input.is-checked {
        & + .ins-radio__label {
            color: $ins--color-primary;
        }
        .ins-radio__inner {
            border-color: $ins--color-primary;
            background: $ins--color-primary;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
    &__input.is-disabled {
        & + .ins-radio__label {
            color: $ins--checkbox-text-color-disabled;
            cursor: not-allowed;
        }
        .ins-radio__inner {
            background-color: $ins--checkbox-background-color-disabled;
            border-color: #e4e7ed;
            cursor: not-allowed;
            &:after {
                cursor: not-allowed;
                background-color: $ins--checkbox-background-color-disabled;
            }
        }
    }
    &__input.is-checked.is-disabled {
        .ins-radio__inner {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            &:after {
                background-color: #c0c4cc;
            }
        }
    }
    &__label {
        font-size: 14px;
        padding-left: 10px;
    }
}
</style>

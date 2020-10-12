<template>
    <label class="ins-checkbox">
        <span
            class="ins-checkbox__input"
            :class="[
                { 'is-checked': isChecked },
                { 'is-disabled': disabled },
                { 'is-indeterminate': indeterminate },
            ]"
        >
            <span class="ins-checkbox__inner"></span>
            <input :value="label" type="checkbox" tabIndex="-1" hidden @change="handleChange" />
        </span>

        <span class="ins-checkbox__label" :class="{ 'is-disabled': disabled }">
            <slot></slot>
        </span>
    </label>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { findComponentUpward } from "@/utils/findComponent";
import { defineComponent } from "vue";

export default defineComponent({
    name: `${prefix}Checkbox`,

    props: {
        value: {
            type: [Number, String, Boolean],
        },
        label: {
            type: [String, Number, Boolean],
            default: false,
        },
        trueLabel: [String, Number],
        falseLabel: [String, Number],
        disabled: {
            type: Boolean,
            default: false,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            curValue: null,
        };
    },
    methods: {
        handleChange() {
            if (this.disabled) {
                return false;
            }
            const parent = findComponentUpward(this, "CheckboxGroup");
            if (parent) {
                const checked = !this.isChecked;
                if (checked) {
                    parent.addValue(this.label);
                } else {
                    parent.removeValue(this.label);
                }
            } else {
                this.curValue = !this.isChecked;
                const value = this.getCheckedValue(this.curValue);
                this.$emit("change", value);
                this.dispatch("FormItem", "on-form-change", value);
            }
        },
        getCheckedValue(val: null) {
            const trueValue = this.trueLabel || true;
            const falseValue = this.falseLabel || false;
            const value = val ? trueValue : falseValue;
            return value;
        },
    },
    computed: {
        isChecked(): boolean {
            let bool: any = false;
            const parent = findComponentUpward(this, "CheckboxGroup");
            if (parent) {
                bool = parent.curValue.includes(this.label);
            } else {
                if (this.trueLabel) bool = this.value == this.trueLabel;
                else bool = this.value;
            }
            return bool;
        },
    },
});
</script>

<style lang="scss" scoped>
@import "@/style/common/var.scss";

.ins-checkbox {
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
        &.is-indeterminate {
            .ins-checkbox__inner {
                background-color: $ins--color-primary;
                &::before {
                    content: "";
                    position: absolute;
                    display: block;
                    background-color: #fff;
                    height: 2px;
                    transform: scale(0.5);
                    left: 0;
                    right: 0;
                    top: 5px;
                }
            }
        }
    }
    &__inner {
        display: inline-block;
        position: relative;
        border: 1px solid $ins--checkbox-border-color;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
            background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
        &:hover {
            border-color: $ins--color-primary;
        }
        &:after {
            box-sizing: content-box;
            content: "";
            border: 1px solid #fff;
            border-left: 0;
            border-top: 0;
            height: 7px;
            left: 4px;
            position: absolute;
            top: 1px;
            transform: rotate(45deg) scaleY(0);
            width: 3px;
            transition: transform 0.15s ease-in 0.05s;
            transform-origin: center;
        }
    }
    &__input.is-checked {
        border-color: $ins--color-primary;
        & + .ins-checkbox__label {
            color: $ins--color-primary;
        }
        .ins-checkbox__inner {
            background: $ins--color-primary;
            border-color: $ins--color-primary;
            &:after {
                transform: rotate(45deg) scaleY(1);
            }
        }
    }
    &__input.is-disabled {
        & + .ins-checkbox__label {
            color: $ins--checkbox-border-color;
            cursor: not-allowed;
        }
        .ins-checkbox__inner {
            background-color: #edf2fc;
            border-color: $ins--checkbox-border-color;
            cursor: not-allowed;
            &:after {
                cursor: not-allowed;
                border-color: #c0c4cc;
            }
        }
    }
    &__input.is-checked.is-disabled {
        .ins-checkbox__inner {
            background-color: #f2f6fc;
            border-color: #dcdfe6;
            &:after {
                border-color: $ins--checkbox-border-color;
            }
        }
    }
    &__label {
        font-size: 14px;
        padding-left: 10px;
    }
}
</style>

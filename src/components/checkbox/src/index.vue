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
import { computed, defineComponent, inject, reactive, toRefs } from "vue";

export default defineComponent({
    name: `${prefix}Checkbox`,

    props: {
        value: [String, Number, Boolean],
        label: [String, Number, Boolean],
        trueLabel: {
            type: [String, Number, Boolean],
            default: true,
        },
        falseLabel: {
            type: [String, Number, Boolean],
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const parent: any = inject("parent");
        const data: any = reactive({
            curValue: props.value,
        });

        const isChecked = computed(() => {
            let bool: any = false;
            const parentInstance = parent;
            if (parentInstance) {
                bool = parentInstance.curValue.includes(props.label);
            } else {
                bool = props.value === props.trueLabel;
            }
            return bool;
        });
        const handleChange = () => {
            if (props.disabled) {
                return false;
            }
            const parentInstance = parent;
            const checked = isChecked.value;
            if (parentInstance) {
                if (checked) {
                    parent.removeValue(props.label);
                } else {
                    parent.addValue(props.label);
                }
            } else {
                if (checked) {
                    data.curValue = props.falseLabel;
                } else {
                    data.curValue = props.trueLabel;
                }
                emit("update:value", data.curValue);
                emit("change", data.curValue);
                // this.dispatch("FormItem", "on-form-change", value);
            }
        };
        return { ...toRefs(data), parent, handleChange, isChecked };
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

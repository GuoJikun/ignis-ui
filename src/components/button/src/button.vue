<template>
    <button
        class="ins-button"
        :disabled="disabled"
        :class="[
            'ins-button--' + type,
            'ins-button--' + size,
            { 'is-disabled': disabled },
            { 'is-plain': plain },
            { 'is-round': round },
            { 'is-loading': loading },
        ]"
        @click="handleClick"
    >
        <ins-icon
            name="arrow-repeat"
            spin
            v-show="loading"
            size="14px"
            class="ins-button-loading"
        ></ins-icon>
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix, oneOf } from "@/utils/assist";
import insIcon from "@/components/icon";

export default defineComponent({
    name: `${prefix}Button`,
    components: { insIcon },
    props: {
        type: {
            type: String,
            default: "default",
            validator(value: string): boolean {
                const flag = oneOf(value, [
                    "default",
                    "primary",
                    "success",
                    "warning",
                    "danger",
                    "info",
                    "text",
                ]);
                return flag;
            },
        },
        size: {
            type: String,
            default: "default",
            validator(value: string): boolean {
                const types = ["default", "large", "small", "mini"];
                return oneOf(value, types);
            },
        },
        disabled: {
            type: Boolean,
        },
        plain: {
            type: Boolean,
        },
        round: {
            type: Boolean,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick(e: never) {
            this.$emit("click", e);
        },
    },
});
</script>

<style lang="scss">
@import "@/style/common/var.scss";
.ins-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border: 1px solid $ins-border-color-default;
    background: #fff;
    color: #606266;
    &-loading {
        margin-right: 4px;
    }
    &:hover,
    &:focus {
        color: $ins--color-primary;
        border-color: $ins--color-primary-light-7;
        background-color: $ins--color-primary-light-9;
    }
    & + & {
        margin-left: 10px;
    }
    &--default {
        padding: 8px 20px;
        font-size: 14px;
        border-radius: 4px;
        &.is-round {
            border-radius: 16px;
        }
    }
    &--mini {
        padding: 4px 12px;
        font-size: 12px;
        border-radius: 2px;
        &.is-round {
            border-radius: 11px;
        }
    }
    &--small {
        padding: 6px 14px;
        font-size: 12px;
        border-radius: 3px;
        &.is-round {
            border-radius: 13px;
        }
    }
    &--large {
        padding: 12px 28px;
        font-size: 14px;
        border-radius: 4px;
        &.is-round {
            border-radius: 20px;
        }
    }
    &.is-plain {
        &:hover,
        &:focus {
            color: $ins--color-primary;
            border-color: $ins--color-primary;
            background-color: $ins--color-white;
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: $ins-disabled;
            cursor: not-allowed;
            background-color: $ins--color-white;
            border-color: $ins-border-color-disabled;
        }
    }
    &.is-loading,
    &.is-disabled,
    &.is-disabled:active,
    &.is-disabled:focus,
    &.is-disabled:hover {
        color: $ins-disabled;
        cursor: not-allowed;
        background-color: $ins--color-white;
        border-color: $ins-border-color-disabled;
    }
    &--primary {
        color: $ins--color-white;
        background-color: $ins--color-primary;
        border-color: $ins--color-primary;
        &:hover,
        &:focus {
            color: $ins--color-white;
            border-color: $ins--color-primary-light-2;
            background-color: $ins--color-primary-light-2;
        }
        &.is-plain {
            color: $ins--color-primary;
            border-color: $ins--color-primary-light-6;
            background-color: $ins--color-primary-light-9;
            &:hover,
            &:focus {
                color: $ins--color-white;
                border-color: $ins--color-primary;
                background-color: $ins--color-primary;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $ins--color-primary-light-4;
                background-color: $ins--color-primary-light-9;
                border-color: $ins--color-primary-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $ins-primary-disabled;
            border-color: $ins-primary-disabled;
        }
    }
    &--success {
        color: $ins--color-white;
        background-color: $ins--color-success;
        border-color: $ins--color-success;
        &:hover,
        &:focus {
            color: $ins--color-white;
            border-color: $ins--color-success-light-2;
            background-color: $ins--color-success-light-2;
        }
        &.is-plain {
            color: $ins--color-success;
            border-color: $ins--color-success-light-6;
            background-color: $ins--color-success-light-9;
            &:hover,
            &:focus {
                color: $ins--color-white;
                border-color: $ins--color-success;
                background-color: $ins--color-success;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $ins--color-success-light-4;
                background-color: $ins--color-success-light-9;
                border-color: $ins--color-success-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $ins-success-disabled;
            border-color: $ins-success-disabled;
        }
    }
    &--danger {
        color: $ins--color-white;
        background-color: $ins--color-danger;
        border-color: $ins--color-danger;
        &:hover,
        &:focus {
            color: $ins--color-white;
            border-color: $ins--color-danger-light-2;
            background-color: $ins--color-danger-light-2;
        }
        &.is-plain {
            color: $ins--color-danger;
            border-color: $ins--color-danger-light-6;
            background-color: $ins--color-danger-light-9;
            &:hover,
            &:focus {
                color: $ins--color-white;
                border-color: $ins--color-danger;
                background-color: $ins--color-danger;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $ins--color-danger-light-4;
                background-color: $ins--color-danger-light-9;
                border-color: $ins--color-danger-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $ins-danger-disabled;
            border-color: $ins-danger-disabled;
        }
    }
    &--warning {
        color: $ins--color-white;
        background-color: $ins--color-warning;
        border-color: $ins--color-warning;
        &:hover,
        &:focus {
            color: $ins--color-white;
            border-color: $ins--color-warning-light-2;
            background-color: $ins--color-warning-light-2;
        }
        &.is-plain {
            color: $ins--color-warning;
            border-color: $ins--color-warning-light-6;
            background-color: $ins--color-warning-light-9;
            &:hover,
            &:focus {
                color: $ins--color-white;
                border-color: $ins--color-warning;
                background-color: $ins--color-warning;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $ins--color-warning-light-4;
                background-color: $ins--color-warning-light-9;
                border-color: $ins--color-warning-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $ins-warning-disabled;
            border-color: $ins-warning-disabled;
        }
    }
    &--info {
        color: $ins--color-white;
        background-color: $ins--color-info;
        border-color: $ins--color-info;
        &:hover,
        &:focus {
            color: $ins--color-white;
            border-color: $ins--color-info-light-2;
            background-color: $ins--color-info-light-2;
        }
        &.is-plain {
            color: $ins--color-info;
            border-color: $ins--color-info-light-6;
            background-color: $ins--color-info-light-9;
            &:hover,
            &:focus {
                color: $ins--color-white;
                border-color: $ins--color-info;
                background-color: $ins--color-info;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $ins--color-info-light-4;
                background-color: $ins--color-info-light-9;
                border-color: $ins--color-info-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $ins-info-disabled;
            border-color: $ins-info-disabled;
        }
    }
    &--text {
        color: $ins--color-primary;
        background-color: $ins--color-transparent;
        border-color: $ins--color-transparent;
        &:hover,
        &:focus {
            color: $ins--color-primary-light-2;
            border-color: $ins--color-transparent;
            background-color: $ins--color-transparent;
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:focus,
        &.is-disabled:hover,
        &:active {
            border-color: $ins--color-transparent;
        }
    }
}
</style>

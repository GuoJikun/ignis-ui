<template>
    <transition :name="transfer">
        <span class="ins-tag" :class="['ins-tag--' + theme, `ins-tag--${theme}-${type}`, `ins-tag--${size}`]" @click="clicks">
            <slot></slot>
            <ins-icon class="ins-tag-close" name="x" v-if="closed" @click="close"> </ins-icon>
        </span>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix, oneOf } from "@/utils/assist";
import InsIcon from "@/components/icon/index";

export default defineComponent({
    name: `${prefix}Tag`,
    components: { InsIcon },
    props: {
        type: {
            type: String,
            default: "primary",
            validator(value: string): boolean {
                return oneOf(value, ["primary", "success", "warning", "danger", "info"]);
            },
        },
        size: {
            type: String,
            default: "default",
            validator(value: string): boolean {
                const list = ["default", "large", "small", "mini"];
                return oneOf(value, list);
            },
        },
        closed: Boolean,
        disableTransitions: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: "light",
            validator(value: string): boolean {
                return oneOf(value, ["light", "plain", "dark"]);
            },
        },
    },
    methods: {
        close(event: Event) {
            event.stopPropagation();
            this.$emit("close", event);
        },
        clicks(event: Event) {
            event.stopPropagation();
            this.$emit("click", event);
        },
    },
    computed: {
        transfer(): string {
            return this.disableTransitions ? "" : "ins-zoom-in-center";
        },
    },
});
</script>
<style lang="scss">
@import "@/style/common/var.scss";
.ins-tag {
    display: inline-block;
    padding: 0 10px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
    border: 1px solid transparent;
    & + & {
        margin-left: 10px;
    }
    &--light {
        color: $ins--color-primary;
        border-color: $ins--color-primary-light-8;
        background-color: $ins--color-primary-light-9;
        &-primary {
            color: $ins--color-primary;
            border-color: $ins--color-primary-light-8;
            background-color: $ins--color-primary-light-9;
        }
        &-success {
            color: $ins--color-success;
            border-color: $ins--color-success-light-8;
            background-color: $ins--color-success-light-9;
        }
        &-warning {
            color: $ins--color-warning;
            border-color: $ins--color-warning-light-8;
            background-color: $ins--color-warning-light-9;
        }
        &-danger {
            color: $ins--color-danger;
            border-color: $ins--color-danger-light-8;
            background-color: $ins--color-danger-light-9;
        }
        &-info {
            color: $ins--color-info;
            border-color: $ins--color-info-light-8;
            background-color: $ins--color-info-light-9;
        }
    }
    &--plain {
        color: $ins--color-primary;
        border-color: $ins--color-primary-light-6;
        background-color: $ins--color-white;
        &-primary {
            color: $ins--color-primary;
            border-color: $ins--color-primary-light-6;
            background-color: $ins--color-white;
        }
        &-success {
            color: $ins--color-success;
            border-color: $ins--color-success-light-6;
            background-color: $ins--color-white;
        }
        &-warning {
            color: $ins--color-warning;
            border-color: $ins--color-warning-light-6;
            background-color: $ins--color-white;
        }
        &-danger {
            color: $ins--color-danger;
            border-color: $ins--color-danger-light-6;
            background-color: $ins--color-white;
        }
        &-info {
            color: $ins--color-info;
            border-color: $ins--color-info-light-6;
            background-color: $ins--color-white;
        }
    }
    &--dark {
        color: $ins--color-white;
        border-color: $ins--color-primary;
        background-color: $ins--color-primary;
        &-primary {
            color: $ins--color-white;
            border-color: $ins--color-primary;
            background-color: $ins--color-primary;
        }
        &-success {
            color: $ins--color-white;
            border-color: $ins--color-success;
            background-color: $ins--color-success;
        }
        &-warning {
            color: $ins--color-white;
            border-color: $ins--color-warning;
            background-color: $ins--color-warning;
        }
        &-danger {
            color: $ins--color-white;
            border-color: $ins--color-danger;
            background-color: $ins--color-danger;
        }
        &-info {
            color: $ins--color-white;
            border-color: $ins--color-info;
            background-color: $ins--color-info;
        }
    }
    &-close {
        margin-left: 8px;
        border-radius: 50%;
        font-size: 14px;
        position: relative;
        top: 1.5px;
        cursor: pointer;
        &:hover {
            background-color: $ins--color-info;
            color: $ins--color-white;
        }
    }
    &--large {
        height: 32px;
        line-height: 32px;
    }
    &--small {
        height: 24px;
        line-height: 24px;
    }
    &--mini {
        height: 20px;
        line-height: 20px;
        padding: 0 6px;
    }
    &--large &-close {
        font-size: 16px;
        top: 2px;
        &:hover {
            background-color: $ins--color-info;
            color: $ins--color-white;
        }
    }
    &--small &-close,
    &--mini &-close {
        font-size: 12px;
        top: 0.5px;
        &:hover {
            background-color: $ins--color-info;
            color: $ins--color-white;
        }
    }
}
</style>

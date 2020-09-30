<template>
    <li class="ins-timeline-item">
        <div class="ins-timeline-item__tail"></div>

        <div
            v-if="!$slots.dot"
            class="ins-timeline-item__node"
            :class="[`ins-timeline-item__node--${size || ''}`, `ins-timeline-item__node--${type || ''}`]"
            :style="{
                backgroundColor: color,
            }"
        >
            <i v-if="icon" class="ins-timeline-item__icon" :class="icon"></i>
        </div>
        <div v-if="$slots.dot" class="ins-timeline-item__dot">
            <slot name="dot"></slot>
        </div>

        <div class="ins-timeline-item__wrapper">
            <div v-if="!hideTimestamp && placement === 'top'" class="ins-timeline-item__timestamp is-top">
                {{ timestamp }}
            </div>

            <div class="ins-timeline-item__content">
                <slot></slot>
            </div>

            <div v-if="!hideTimestamp && placement === 'bottom'" class="ins-timeline-item__timestamp is-bottom">
                {{ timestamp }}
            </div>
        </div>
    </li>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}TimelineItem`,
    inject: ["timeline"],
    props: {
        timestamp: String,
        hideTimestamp: {
            type: Boolean,
            default: false,
        },
        placement: {
            type: String,
            default: "bottom",
            validator(value) {
                return ["top", "bottom"].includes(value);
            },
        },
        type: {
            type: String,
            validator(value) {
                return ["primary", "success", "warning", "danger", "info"].includes(value);
            },
        },
        color: String,
        size: {
            type: String,
            default: "normal",
            validator(value) {
                return ["normal", "large"].includes(value);
            },
        },
        icon: String,
    },
};
</script>

<style lang="scss">
@import "@/style/common/var.scss";
.ins-timeline-item {
    position: relative;
    padding-bottom: 20px;

    &__wrapper {
        position: relative;
        padding-left: 28px;
        top: -3px;
    }

    &__tail {
        position: absolute;
        left: 4px;
        height: 100%;
        border-left: 2px solid $ins--timeline-node-color;
    }

    &__icon {
        color: $ins--color-white;
        font-size: $ins--font-size-small;
    }

    &__node {
        position: absolute;
        background-color: $ins--timeline-node-color;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &--normal {
            left: -1px;
            width: $ins--timeline-node-size-normal;
            height: $ins--timeline-node-size-normal;
        }

        &--large {
            left: -2px;
            width: $ins--timeline-node-size-large;
            height: $ins--timeline-node-size-large;
        }

        &--primary {
            background-color: $ins-primary;
        }

        &--success {
            background-color: $ins-success;
        }

        &--warning {
            background-color: $ins-warning;
        }

        &--danger {
            background-color: $ins-danger;
        }

        &--info {
            background-color: $ins-info;
        }
    }

    &__dot {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__content {
        color: $ins-primary;
    }

    &__timestamp {
        color: $ins--color-text-secondary;
        line-height: 1;
        font-size: $ins--font-size-small;

        &.is-top {
            margin-bottom: 8px;
            padding-top: 4px;
        }

        &.is-bottom {
            margin-top: 8px;
        }
    }
}
</style>

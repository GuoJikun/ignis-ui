<template>
    <div
        class="ins-divider"
        :class="[
            `ins-divider-${type}`,
            $slots.default ? `ins-divider-text-${placement}` : 'ins-divider-default',
            { 'is-dashed': dashed },
        ]"
    >
        <span
            class="ins-divier-inner__text"
            :style="textStyle"
            v-if="type === 'horizontal' && $slots.default"
        >
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix, oneOf } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Divider`,
    props: {
        placement: {
            type: String,
            default: "center",
            validator(value: string): boolean {
                return oneOf(value, ["left", "center", "right"]);
            },
        },
        type: {
            type: String,
            default: "horizontal",
            validator(value: string): boolean {
                return oneOf(value, ["horizontal", "vertical"]);
            },
        },
        dashed: {
            type: Boolean,
            default: false,
        },
        textStyle: [Object, String],
    },
});
</script>
<style lang="scss">
@import "@/style/common/var.scss";

.ins-divider {
    display: inline-block;
    font-size: $ins--divider-font-size-base;
    line-height: 1.5;
    color: $ins--timeline-font-color-base;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    &-horizontal {
        display: block;
        height: 1px;
        width: 100%;
        min-width: 100%;
        margin: 24px 0;
        clear: both;
        .ins-divier-inner__text {
            display: inline-block;
            margin: 0 20px;
        }
    }
    &-vertical {
        display: inline-block;
        margin: 0 10px;
        width: 1px;
        height: 1em !important;
        background-color: $ins--timeline-background-color-base;
        vertical-align: middle;
    }
    &-text-center,
    &-text-left,
    &-text-right {
        display: table;
        white-space: nowrap;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        margin: 16px 0;
        border-top: none !important;
        &:before,
        &:after {
            content: "";
            display: table-cell;
            position: relative;
            width: 50%;
            transform: translateY(50%);
            top: 50%;
            border-top: 1px $ins--timeline-border-style-base $ins--timeline-border-color-base;
        }
        .ins-divier-inner__text {
            display: inline-block;
            padding: 0px;
        }
    }
    &-default {
        background-color: $ins--timeline-background-color-base;
    }
    &-text-left {
        &:before {
            width: 5%;
        }
        &:after {
            width: 95%;
        }
    }
    &-text-right {
        &:before {
            width: 95%;
        }
        &:after {
            width: 5%;
        }
    }
    .ins-divier-inner__text {
        box-sizing: border-box;
        display: inline-block;
        background-color: $ins--color-white;
        font-size: 14px;
    }
}
.is-dashed {
    background: 0 0;
    border-top: 1px dashed #e8eaec;
    height: 1px;
    &:before,
    &:after {
        content: "";
        display: table-cell;
        position: relative;
        width: 50%;
        transform: translateY(50%);
        top: 50%;
        border-top: 1px dashed $ins--timeline-border-color-base;
    }
}
</style>

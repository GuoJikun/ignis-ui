<template>
    <div class="ins-alert" :class="getType" :style="getColor">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { prefix, oneOf } from "@/utils/assist";

interface ColorProp {
    line?: string;
    background?: string;
    font?: string;
}

interface Color {
    borderLeftColor?: string;
    backgroundColor?: string;
    color?: string;
}

export default defineComponent({
    name: `${prefix}Alert`,
    props: {
        type: {
            type: String,
            validator(value: string) {
                return oneOf(value, ["success", "danger", "warning", "info"]);
            },
        },
        color: {
            type: Object as PropType<ColorProp>,
        },
    },
    computed: {
        getType(): string {
            if (this.type) {
                return `is-${this.type}`;
            } else {
                return "";
            }
        },
        getColor(): Color {
            if (this.color) {
                const style: Color = {};
                if (this.color.line) {
                    style["borderLeftColor"] = this.color.line;
                }
                if (this.color.background) {
                    style["backgroundColor"] = this.color.background;
                }
                if (this.color.font) {
                    style["color"] = this.color.font;
                }
                return style;
            } else {
                return {};
            }
        },
    },
});
</script>
<style lang="scss">
@import "@/style/common/var.scss";
.ins-alert {
    padding: 10px 20px;
    background-color: $ins--color-primary-light-8;
    border-left: 6px solid $ins--color-primary;
    border-radius: 4px;
    line-height: 1.8em;
    & + & {
        margin-top: 20px;
    }
    &.is-success {
        border-left-color: $ins--color-success;
        background-color: $ins--color-success-light;
    }
    &.is-danger {
        border-left-color: $ins--color-danger;
        background-color: $ins--color-danger-light;
    }
    &.is-warning {
        border-left-color: $ins--color-warning;
        background-color: $ins--color-warning-light;
    }
    &.is-info {
        border-left-color: $ins--color-info;
        background-color: $ins--color-info-light;
    }
}
</style>

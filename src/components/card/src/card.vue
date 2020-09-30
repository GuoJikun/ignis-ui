<template>
    <div class="ins-card" :class="['is-' + shadow + '-shadow']">
        <div class="ins-card-header" v-if="showHeader">
            <slot name="header">{{ title }}</slot>
        </div>
        <div class="ins-card-body" :style="[bodyStyle]">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, Slots, Slot } from "vue";
import { prefix, oneOf } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Card`,
    props: {
        shadow: {
            type: String,
            default: "always",
            validator(value: string) {
                const list: string[] = ["always", "hover", "never"];
                return oneOf(value, list);
            },
        },
        title: String,
        bodyStyle: {
            type: Object,
            default() {
                return {
                    padding: "16px 20px",
                };
            },
        },
    },
    computed: {
        showHeader(): string | Slot | undefined {
            const slots: Slots = this.$slots;
            const flag: Slot | undefined = slots.header;
            return this.title || flag || undefined;
        },
    },
});
</script>
<style lang="scss">
@import "@/style/common/var.scss";
.ins-card {
    border-radius: 4px;
    background-color: $ins-white;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    border: 1px solid $ins-border-color-second;
    &-header {
        border-bottom: 1px solid $ins-border-color-second;
        padding: 14px 16px;
        box-sizing: border-box;
    }
    &-body {
        padding: 16px;
    }
}
.ins-card.is-always-shadow,
.ins-card.is-hover-shadow:focus,
.ins-card.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>

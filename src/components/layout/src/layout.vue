<template>
    <div class="ins-layout" :class="['is-' + dir]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix, oneOf } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Layout`,
    props: {
        direction: {
            type: String,
            validator(value: string): boolean {
                return oneOf(value, ["vertical", "horizontal"]);
            },
        },
    },
    computed: {
        dir(): string {
            if (this.direction) {
                return this.direction;
            }
            const slots = this.$slots;
            console.log(slots, "slots");
            const children = slots.default || [];

            const tmp = children.filter(
                (cur: { componentOptions: { tag: string } | undefined }) => {
                    if (cur.componentOptions !== undefined) {
                        return (
                            cur.componentOptions.tag == "ins-header" ||
                            cur.componentOptions.tag == "ins-footer"
                        );
                    }
                }
            );
            if (tmp && tmp.length > 0) {
                return "horizontal";
            } else {
                return "vertical";
            }
        },
    },
});
</script>
<style lang="scss">
.ins-layout {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    &.is-vertical {
        flex-direction: row;
    }
    &.is-horizontal {
        flex-direction: column;
    }
}
</style>

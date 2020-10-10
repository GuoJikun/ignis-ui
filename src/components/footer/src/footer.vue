<template>
    <div class="ins-layout-footer" :style="getHeight">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Footer`,
    props: {
        height: {
            type: String,
            default: "60px",
        },
    },
    setup() {
        const layout: any = inject("layout");

        return {
            layout,
        };
    },
    mounted() {
        this.layout.updateNames(this.$options.name);
    },
    computed: {
        getHeight(): string {
            return `height:${this.height};`;
        },
    },
});
</script>
<style lang="scss">
.ins-layout-footer {
    box-sizing: border-box;
    padding: 0 20px;
    flex-shrink: 0;
    width: 100%;
}
</style>

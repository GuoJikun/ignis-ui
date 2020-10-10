<template>
    <div class="ins-layout-header" :style="getHeight">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Header`,
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
.ins-layout-header {
    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    flex-shrink: 0;
}
</style>

<template>
    <div class="ins-layout-header" :style="getHeight">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Header`,
    props: {
        height: {
            type: String,
            default: "60px",
        },
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

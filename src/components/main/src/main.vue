<template>
    <div class="ins-layout-main" :style="[styles]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Main`,
    props: {
        styles: {
            type: Object,
            default() {
                return {
                    padding: "20px",
                };
            },
        },
    },
});
</script>
<style lang="scss">
.ins-layout-main {
    box-sizing: border-box;
    overflow: auto;
    display: block;
    flex: 1;
    flex-basis: auto;
}
</style>

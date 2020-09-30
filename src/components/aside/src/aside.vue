<template>
    <div class="ins-layout-aside" :style="getWidth">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Aside`,
    props: {
        width: {
            type: String,
            default: "300px",
        },
    },
    computed: {
        getWidth(): string {
            return `width:${this.width};`;
        },
    },
});
</script>
<style lang="scss">
.ins-layout-aside {
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: auto;
}
</style>

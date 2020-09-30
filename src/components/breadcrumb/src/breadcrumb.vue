<template>
    <div class="ins-breadcrumb">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Breadcrumb`,
    props: {
        separator: {
            type: String,
            default: ">",
        },
    },
    provide() {
        return {
            separator: this.separator,
        };
    },
});
</script>
<style lang="scss">
.ins-breadcrumb {
    color: #999;
    font-size: 14px;
}
</style>

<template>
    <div class="ins-cell-group" :class="[{ 'is-border': border }]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent } from "vue";

export default defineComponent({
    name: `${prefix}CellGroup`,
    props: {
        border: Boolean,
    },
});
</script>

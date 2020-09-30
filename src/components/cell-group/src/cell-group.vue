<template>
    <div class="ins-cell-group" :class="[{ 'is-border': border }]">
        <slot></slot>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}CellGroup`,
    props: {
        border: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

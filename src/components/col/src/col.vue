<template>
    <component
        :is="tag"
        :class="[
            'ins-col',
            this.span ? `ins-col-${this.span}` : '',
            this.offset ? `ins-col-offset-${this.offset}` : '',
        ]"
        :style="{
            paddingLeft: `${gutter / 2}px`,
            paddingRight: `${gutter / 2}px`,
        }"
    >
        <slot></slot>
    </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Col`,
    props: {
        tag: {
            type: String,
            default: "div",
        },
        span: [Number, String],
        offset: [Number, String],
    },
    inject: ["gutter"],
});
</script>

<style lang="scss">
@import "@/style/common/var.scss";
[class*="ins-col-"] {
    float: left;
    box-sizing: border-box;
}

@for $i from 1 to 25 {
    .ins-col-#{$i} {
        width: #{$i / 24 * 100%};
    }
}

@for $i from 1 to 25 {
    .ins-col-offset-#{$i} {
        margin-left: #{$i / 24 * 100%};
    }
}
</style>

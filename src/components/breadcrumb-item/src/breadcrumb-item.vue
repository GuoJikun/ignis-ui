<template>
    <span class="ins-breadcrumb-item">
        <component :is="isCom" :to="to" :replace="replace" :append="append" :target="target" class="ins-breadcrumb-item-text">
            <slot></slot>
        </component>
        <span class="ins-breadcrumb-item-symbol">{{ separator }}</span>
    </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}BreadcrumbItem`,
    inject: ["separator"],
    props: {
        to: {
            type: [String, Object],
        },
        append: {
            type: Boolean,
            default: false,
        },
        replace: {
            type: Boolean,
            default: false,
        },
        target: {
            type: String,
            default: "_self",
        },
    },
    computed: {
        isCom() {
            if (this.to) {
                return "routerLink";
            } else {
                return "span";
            }
        },
        tags() {
            let tag = "span";
            if (this.to) {
                tag = "a";
            }
            return tag;
        },
    },
});
</script>
<style lang="scss">
@import "@/style/common/var.scss";
.ins-breadcrumb-item {
    & > a {
        &:hover {
            color: $ins--color-primary;
        }
    }
    &-text {
        text-decoration: none;
        color: #515a6e;
        transition: color 0.2s ease-in-out;
    }
    &-symbol {
        margin: 0 3px 0 2px;
    }
    &:last-child {
        font-weight: 700;
        color: #515a6e;
        .ins-breadcrumb-item-symbol {
            display: none;
        }
    }
}
</style>

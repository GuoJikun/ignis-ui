<template>
    <div class="ins-collapse">
        <slot></slot>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist";

export default {
    name: `${prefix}Collapse`,
    model: {
        props: "value",
        event: "change",
    },
    props: {
        value: [String, Array],
        accordion: {
            type: Boolean,
            default: false,
        },
        arrow: {
            type: String,
            validator(value) {
                return ["right", "none"].includes(value);
            },
        },
    },
};
</script>
<style lang="scss">
.ins-collapse {
    background-color: #f7f7f7;
    border-radius: 3px;
    border: 1px solid #dcdee2;
}
</style>

<template>
    <div class="ins-collapse">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { prefix, oneOf } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Collapse`,
    props: {
        value: [String, Array],
        accordion: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        arrow: {
            type: String as PropType<string>,
            validator(value: string) {
                return oneOf(value, ["right", "none"]);
            },
        },
    },

    provide() {
        return {
            accordion: this.accordion,
            arrow: this.arrow,
            activeItem: this.value,
            change: this.change,
            parent: this,
        };
    },
    setup() {
        const children = ref([]);
        const updateChildren = (val: never) => {
            children.value.push(val);
        };
        return {
            childs: children,
            updateChildren,
        };
    },
    mounted() {
        console.log(this.childs, "$$$$$$$$$$$$");
    },
    methods: {
        change(value: any) {
            this.$emit("change", value);
        },
    },
});
</script>
<style lang="scss">
.ins-collapse {
    background-color: #f7f7f7;
    border-radius: 3px;
    border: 1px solid #dcdee2;
}
</style>

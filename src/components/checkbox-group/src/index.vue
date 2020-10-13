<template>
    <div class="ins-checkbox-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    name: `${prefix}CheckboxGroup`,

    props: {
        value: Array,
    },
    provide() {
        return {
            parent: this,
        };
    },
    setup(props) {
        const data = reactive({
            curValue: props.value || [],
        });
        return {
            ...toRefs(data),
        };
    },
    methods: {
        addValue(val: any) {
            this.curValue.push(val);
            this.$emit("change", this.curValue);
            this.$emit("update:value", this.curValue);
            // this.dispatch("FormItem", "on-form-change", this.curValue);
        },
        removeValue(val: any) {
            const index = this.curValue.indexOf(val);
            this.curValue.splice(index, 1);
            this.$emit("change", this.curValue);
            this.$emit("update:value", this.curValue);
            // this.dispatch("FormItem", "on-form-change", this.curValue);
        },
    },
    watch: {
        value(val) {
            this.curValue = val;
        },
    },
});
</script>

<style lang="scss" scoped>
@import "@/style/common/var.scss";

.ins-checkbox-group {
    background-color: #fff;
}
</style>

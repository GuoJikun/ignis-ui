<template>
    <div class="ins-radio-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent, reactive, toRefs, watchEffect } from "vue";

export default defineComponent({
    name: `${prefix}RadioGroup`,
    props: {
        value: [Number, String, Boolean],
        disabled: Boolean,
        name: String,
    },
    provide() {
        return {
            parent: this,
        };
    },
    setup(props, { emit }) {
        const data = reactive({
            curValue: props.value,
        });
        const updateValue = (val: string | number | boolean | undefined) => {
            data.curValue = val;
            emit("change", data.curValue);
            emit("update:value", data.curValue);
            // this.dispatch("FormItem", "on-form-change", this.curValue);
        };
        watchEffect(() => {
            data.curValue = props.value;
        });
        return {
            ...toRefs(data),
            updateValue,
        };
    },
});
</script>

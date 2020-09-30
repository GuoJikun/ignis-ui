<template>
    <div class="ins-radio-group">
        <slot></slot>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import Emitter from "@/mixins-/emitter.js";
export default {
    name: `${prefix}RadioGroup`,
    mixins-: [Emitter],
    model: {
        props: "value",
        event: "change",
    },
    props: {
        value: {
            type: [Number, String, Boolean],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            curValue: this.value,
        };
    },
    methods: {
        updateValue(val) {
            this.curValue = val;
            this.$emit("change", this.curValue);
            this.dispatch("FormItem", "on-form-change", this.curValue);
        },
    },
    watch: {
        value: {
            handler(val) {
                this.curValue = val;
            },
            immediate: true,
        },
    },
};
</script>

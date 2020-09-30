<template>
    <div :class="['ins-switch', { 'is-checked': isChecked }, { 'is-disabled': disabled }]" @click="switchs">
        <input :value="curValue" :name="name" type="text" hidden />
        <span class="ins-switch__core" :style="switchWidth">
            <span v-if="activeText || inactiveText">{{ showText }}</span>
        </span>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import Emitter from "@/mixins-/emitter.js";
export default {
    name: `${prefix}Switch`,
    mixins-: [Emitter],
    model: {
        props: "value",
        event: "change",
    },
    props: {
        value: {
            type: [Number, String, Boolean],
            default: false,
        },
        activeValue: {
            type: [String, String, Boolean],
            default: true,
        },
        inactiveValue: {
            type: [String, String, Boolean],
            default: false,
        },
        activeText: String,
        inactiveText: String,
        disabled: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [Number, String],
            default: "44",
        },
        name: String,
    },
    data() {
        return {
            curValue: false,
        };
    },
    mounted() {
        this.curValue = this.value;
    },
    methods: {
        switchs() {
            if (this.disabled) {
                return;
            }
            this.curValue = this.curValue == this.activeValue ? this.inactiveValue : this.activeValue;
            this.$emit("change", this.curValue);
            this.dispatch("foxFormItem", "on-form-change", this.curValue);
        },
    },
    computed: {
        switchWidth() {
            return {
                width: this.width + "px",
            };
        },
        showText() {
            return this.curValue == this.activeValue ? this.activeText : this.inactiveText;
        },
        isChecked() {
            return this.curValue == this.activeValue;
        },
    },
    watch: {
        value(val) {
            this.curValue = val;
        },
    },
};
</script>

<style lang="scss">
@import "@/style/switch.scss";
</style>

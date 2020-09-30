<template>
    <div
        class="ins-input"
        ref=""
        :class="[{ 'ins-input--suffix': !!suffixIcon || isClose }, { 'is-disabled': disabled }, getSize]"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
    >
        <slot name="prefix" v-if="type === 'text' && prefixIcon">
            <ins-icon :name="prefixIcon"></ins-icon>
        </slot>
        <input
            v-if="readonly"
            readonly
            class="ins-input__inner"
            :max="max"
            :min="min"
            :placeholder="placeholder"
            :disabled="disabled"
            :type="type"
            :value="cur"
            @focus="fixed"
            @blur="blur"
            @input="inputs"
        />
        <input
            v-else
            class="ins-input__inner"
            :max="max"
            :min="min"
            :placeholder="placeholder"
            :disabled="disabled"
            :type="type"
            :value="cur"
            @focus="fixed"
            @blur="blur"
            @input="inputs"
        />
        <span class="ins-input__suffix" v-if="clearable || suffixIcon">
            <slot name="suffix" v-if="type === 'text' && suffixIcon">
                <ins-icon :name="suffixIcon" class="ins-input__icon"></ins-icon>
            </slot>
            <ins-icon name="x" class="ins-input-close" v-if="isClose" @click.native="clear"></ins-icon>
        </span>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import FoxIcon from "@/components/icon";
import Emitter from "@/mixins-/emitter.js";

export default {
    name: `${prefix}Input`,
    components: { FoxIcon },
    mixins-: [Emitter],
    model: {
        props: "value",
        event: "change",
    },
    props: {
        value: [String, Number],
        clearable: Boolean,
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        prefixIcon: String,
        suffixIcon: String,
        type: {
            type: String,
            default: "text",
        },
        size: {
            type: String,
            validator(value) {
                return ["large", "small", "mini", "default"].indexOf(value) !== -1;
            },
        },
        max: Number,
        min: Number,
        placeholder: String,
    },
    data() {
        return {
            cur: this.value,
            isFocus: false,
        };
    },
    methods: {
        mouseEnter() {
            this.isFocus = true;
        },
        mouseLeave() {
            this.isFocus = false;
        },
        fixed(ev) {
            this.$emit("focus", ev);
        },
        blur(ev) {
            this.$emit("blur", ev);
            this.dispatch("FormItem", "on-form-blur", this.cur);
        },
        inputs(ev) {
            this.cur = ev.target.value;
            this.$emit("change", this.cur);
            this.$emit("input", this.cur);
            this.dispatch("FormItem", "on-form-change", ev.target.value);
        },
        clear() {
            this.cur = null;
            this.$emit("change", this.cur);
            this.dispatch("FormItem", "on-form-change", this.cur);
            this.$emit("clear");
        },
    },
    computed: {
        isClose() {
            return this.clearable && this.isFocus && this.cur;
        },
        getSize() {
            if (this.size) {
                return `ins-input--${this.size}`;
            } else {
                return "";
            }
        },
    },
    watch: {
        value(val) {
            this.cur = val;
        },
    },
};
</script>

<style lang="scss">
@import "@/style/input.scss";
</style>

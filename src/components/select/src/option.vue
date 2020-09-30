<template>
    <li :class="['ins-option', { 'is-disabled': disabled }]" @click="handClick">
        <slot>
            <span>{{ currentLabel }}</span>
        </slot>
    </li>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import { findComponentUpward } from "@/utils/findComponent.js";

export default {
    name: `${prefix}Option`,
    props: {
        value: [String, Number],
        label: String,
        disabled: Boolean,
    },
    inject: {
        select: {
            default: {},
        },
    },
    computed: {
        isObject() {
            return Object.prototype.toString.call(this.value).toLowerCase() === "[object object]";
        },
        currentLabel() {
            return this.label || (this.isObject ? "" : this.value);
        },
        currentValue() {
            return this.value || this.label || "";
        },
    },
    methods: {
        handClick() {
            const parent = findComponentUpward(this, "FoxSelect");
            parent.visiable = false;
            parent.handChange(this.currentValue, this.currentLabel);
        },
    },
    mounted() {
        const parent = findComponentUpward(this, "FoxSelect");
        const value = parent.value;
        if (this.currentValue === value) {
            parent.handChange(this.currentValue, this.currentLabel);
        }
    },
};
</script>

<style lang="scss">
.ins-option {
    line-height: 30px;
    height: 30px;
    box-sizing: border-box;
    padding: 0 15px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
        background-color: #f3f3f3;
    }
    &.is-disabled {
        cursor: not-allowed;
        color: #c0c4cc;
        &:hover {
            background-color: #fff;
        }
    }
}
</style>

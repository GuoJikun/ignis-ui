<template>
    <span :class="['ins-icon', names, { 'is-spin': spin }]" :style="styles"></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Icon`,
    props: {
        name: {
            type: String,
            default: "",
            required: true,
        },
        size: {
            type: [Number, String],
            default: "16px",
        },
        color: String,
        spin: Boolean,
    },
    computed: {
        names(): string {
            if (this.name) {
                return `ins-icon-${this.name}`;
            }
            return "";
        },
        styles() {
            const style: { name?: string; fontSize?: string | number; color?: string } = {};
            if (this.size) {
                const type = typeof this.size;
                if (type === "string") {
                    style["fontSize"] = this.size;
                } else {
                    style["fontSize"] = `${this.size}px`;
                }
            }
            if (this.color) {
                style["color"] = this.color;
            }
            return style;
        },
    },
});
</script>

<style>
@import url("../../../style/icon/icon.css");
.ins-icon {
    display: inline-block;
}
.is-spin {
    transition: 0.3s;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>

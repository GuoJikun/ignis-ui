<template>
    <component
        :is="tag"
        :class="[
            'ins-row',
            {
                'ins-row--flex': this.flex,
            },
            `is-align-${this.align}`,
        ]"
    >
        <slot></slot>
    </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { prefix, oneOf } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Row`,
    props: {
        tag: {
            type: String,
            default: "div",
        },
        gutter: {
            type: Number as PropType<number>,
            default: 0,
        },
        flex: {
            type: Boolean,
            default: false,
        },
        justify: {
            type: String,
            default: "start",
            validator(value: string) {
                const list = ["start", "end", "center", "space-around", "space-between"];
                return oneOf(value, list);
            },
        },
        align: {
            type: String,
            default: "top",
            validator(value: string) {
                return oneOf(value, ["top", "middle", "bottom"]);
            },
        },
    },
    provide() {
        interface Gutter {
            gutter: number;
        }
        const gutter: Gutter = { gutter: this.gutter };
        return gutter;
    },
});
</script>

<style lang="scss">
@import "@/style/common/var.scss";
.ins-row {
    position: relative;
    box-sizing: border-box;
    &::before,
    &::after {
        display: table;
        content: "";
    }
    &::after {
        clear: both;
    }
}
.el-row--flex {
    display: flex;
}

.is-justify-start {
    justify-content: flex-start;
}
.is-justify-center {
    justify-content: flex-center;
}
.is-justify-end {
    justify-content: flex-end;
}
.is-justify-space-around {
    justify-content: space-around;
}
.is-justify-space-between {
    justify-content: space-between;
}
.is-align-top {
    align-content: flex-start;
    align-items: flex-start;
}
.is-align-middle {
    align-content: center;
    align-items: center;
}
.is-align-bottom {
    align-content: flex-end;
    align-items: flex-end;
}
</style>

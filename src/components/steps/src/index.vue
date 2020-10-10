<template>
    <div :class="['ins-steps', `ins-steps-${direction}`]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name: `${prefix}Steps`,
    props: {
        active: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            default: "process",
            validator(val: string) {
                const types = ["wait", "process", "finish", "error"];
                return types.includes(val);
            },
        },
        finishStatus: {
            type: String,
            default: "finish",
            validator(val: string) {
                const types = ["wait", "process", "finish", "error", "success"];
                return types.includes(val);
            },
        },
        direction: {
            type: String,
            default: "horizontal",
            validator(val: string) {
                const types = ["horizontal", "vertical"];
                return types.includes(val);
            },
        },
    },
    provide() {
        return {
            parent: this,
        };
    },
    setup() {
        const children: any = ref([]);
        const appendChild = (child: any) => {
            children.value.push(child);
        };
        onMounted(() => {
            children.value.map((cur: { updateIndex: (arg0: any) => void }, i: number) => {
                console.log(cur);
                cur.updateIndex(i + 1);
            });
        });
        return { children, appendChild };
    },
});
</script>

<style lang="scss">
.ins-steps {
    display: flex;
    width: 100%;
    font-size: 0;
    line-height: 1.5;
    &-horizontal {
        white-space: nowrap;
    }
    &-vertical {
        height: 100%;
        flex-direction: column;
    }
}
</style>

<template>
    <div class="ins-layout" :class="['is-' + dir]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { prefix, oneOf } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Layout`,
    props: {
        direction: {
            type: String,
            validator(value: string): boolean {
                return oneOf(value, ["vertical", "horizontal"]);
            },
        },
    },
    provide() {
        return {
            layout: this,
        };
    },
    setup() {
        const names: any = ref([]);
        const dir: any = ref(null);
        const updateNames = (val: never) => {
            names.value.push(val);
        };

        return { names, dir, updateNames };
    },
    mounted() {
        this.dir = this.getDir();
    },
    methods: {
        getDir(): string {
            if (this.direction) {
                return this.direction;
            }
            const headerFlag: boolean = this.names.includes("InsHeader");
            const footerFlag: boolean = this.names.includes("InsFooter");
            if (headerFlag || footerFlag) {
                return "horizontal";
            } else {
                return "vertical";
            }
        },
    },
});
</script>
<style lang="scss">
.ins-layout {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    &.is-vertical {
        flex-direction: row;
    }
    &.is-horizontal {
        flex-direction: column;
    }
}
</style>

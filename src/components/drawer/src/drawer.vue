<template>
    <teleport to="body">
        <div class="ins-drawer" v-show="state">
            <div class="ins-drawer_mask" @click="hideDrawer"></div>

            <div class="ins-drawer_wrap" :style="[position, styles, { width: width }]">
                <slot></slot>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watchEffect } from "vue";
import { getScrollWidth, prefix } from "@/utils/assist";

export default defineComponent({
    name: `${prefix}Drawer`,
    props: {
        visiable: {
            type: Boolean,
            default: false,
        },
        width: {
            type: String,
            default: "300px",
        },
        styles: {
            type: Object,
            default: () => {
                return {
                    padding: "16px",
                };
            },
        },
        maskClosable: Boolean,
    },
    setup(props, { emit }) {
        const scrollbarWidth = getScrollWidth();
        const data = reactive({
            state: props.visiable,
        });
        const hideDrawer = () => {
            if (!props.maskClosable) emit("update:visiable", false);
        };
        watchEffect(() => {
            data.state = props.visiable;
        });
        const position = computed(() => {
            const style = {};
            if (data.state) {
                // style = { right: 0 };
                document.body.style.paddingRight = `${scrollbarWidth}px`;
                document.body.style.overflow = "hidden";
            } else {
                // style = { right: `${-props.width}px` };
                document.body.setAttribute("style", "");
            }
            return style;
        });

        return {
            hideDrawer,
            ...toRefs(data),
            position,
        };
    },
});
</script>

<style lang="scss">
.ins-drawer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    &_mask {
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }
    &_wrap {
        width: 300px;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fff;
        border-radius: 8px 0 0 8px;
        z-index: 1;
        font-size: 14px;
        padding: 16px;
        box-sizing: border-box;
        transform: translate(100%);
        animation: slideInRight 0.3s both;
    }
}
@keyframes slideInRight {
    form {
        transform: translate(100%);
    }
    to {
        transform: translate(0);
    }
}
</style>

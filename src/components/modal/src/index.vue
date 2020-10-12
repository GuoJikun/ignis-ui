<template>
    <teleport to="body">
        <transition name="fade">
            <div class="ins-modal" v-show="visiable">
                <div class="ins-modal-mask"></div>
                <div class="ins-modal-wrap">
                    <div class="ins-modal-header">
                        <slot name="header">{{ title }}</slot>
                    </div>
                    <div class="ins-modal-body">
                        <slot></slot>
                    </div>
                    <div class="ins-modal-footer" v-if="!footerHide">
                        <slot name="footer">
                            <ins-button @click="closeModal('cancel')">
                                取消
                            </ins-button>
                            <ins-button type="primary" @click="sure">
                                确定
                            </ins-button>
                        </slot>
                    </div>
                    <div class="ins-modal-close" @click="closeModal('close')"></div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent } from "vue";
import InsButton from "@/components/button/index";

export default defineComponent({
    name: `${prefix}Modal`,
    components: { InsButton },
    props: {
        visiable: {
            type: Boolean,
            default: false,
        },
        title: String,
        footerHide: Boolean,
    },
    setup(props, { emit }) {
        const closeModal = (type: string) => {
            emit("update:visiable", false);
            emit("close", type);
        };
        const sure = () => {
            emit("ok");
        };
        return { closeModal, sure };
    },
});
</script>

<style lang="scss">
.ins-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    &-mask {
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.4);
    }
    &-wrap {
        width: 500px;
        position: absolute;
        top: 8vh;
        left: 50%;
        margin-left: -250px;
        background-color: #fff;
        border-radius: 8px;
        z-index: 1;
        font-size: 14px;
    }
    &-header {
        padding: 12px 16px;
        border-bottom: 1px solid #e4e7ed;
        font-size: 15px;
    }
    &-footer {
        padding: 12px 16px;
        border-top: 1px solid #e4e7ed;
        text-align: right;
    }
    &-body {
        padding: 16px;
    }
    &-close {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            left: 8px;
            top: 0;
            width: 1px;
            height: 16px;
            background-color: #999;
            border-radius: 0.5px;
            transform: rotate(-45deg);
            z-index: -1;
        }
        &::before {
            transform: rotate(45deg);
        }
        &:hover::before,
        &:hover::after {
            background-color: #444;
        }
    }
}
</style>

<template>
    <div class="ins-collapse-item" :class="[{ 'ins-collapse-item-active': isActive }]">
        <div class="ins-collapse-item__header" @click="handleChange">
            <ins-icon
                name="chevron-right"
                :class="['ins-icon-right', getArrow ? `ins-collapse-arrow-${getArrow}` : '']"
                size="14"
            >
            </ins-icon>
            <span style="display:inline-block;">
                <slot name="title">{{ title }}</slot>
            </span>
        </div>
        <ins-collapse-transition>
            <div v-show="isActive" class="ins-collapse-item__wrap">
                <div class="ins-collapse-item__wrap-box">
                    <slot></slot>
                </div>
            </div>
        </ins-collapse-transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { prefix } from "@/utils/assist";
import InsCollapseTransition from "@/components/collapse-transition/index";
import InsIcon from "@/components/icon/index";

let uid = 0;

export default defineComponent({
    name: `${prefix}CollapseItem`,
    components: { InsIcon, InsCollapseTransition },
    props: {
        title: String,
        name: [String, Number],
    },
    setup() {
        const arrow = inject("arrow");
        const accordion = inject("accordion");
        const activeItem = inject("activeItem");
        const change: any = inject("change");
        const parent: any = inject("parent") || {};
        return {
            arrow,
            accordion,
            activeItem,
            parent,
            change,
            uid: uid++,
        };
    },
    mounted() {
        console.log(this);
        this.init();
    },
    methods: {
        init() {
            const parent = this.$parent || { $options: { name: "" } };
            const flag = parent.$options.name !== "InsCollapse";
            if (flag) {
                throw new Error("insCollapseItem组件的父组件必须是insCollapse");
            } else {
                this.parent.updateChildren(this.uid);
            }
        },
        handleChange(): void {
            let value: any = this.activeItem;
            if (this.accordion) {
                if (value === this.getName) {
                    value = null;
                } else {
                    value = this.getName.toString();
                }
            } else {
                if (value === undefined) value = [];
                if (value.includes(this.getName)) {
                    console.log(1);
                    value.splice(value.indexOf(this.getName), 1);
                } else {
                    console.log(2);
                    value.push(this.getName);
                }
            }
            this.parent.change(value);
        },
    },
    computed: {
        getName(): any {
            const uid = this.uid;
            return this.name || uid;
        },
        isActive(): boolean {
            let s = null;
            let value: any = this.activeItem;
            const name = this.getName;
            if (this.accordion) {
                s = value === name;
            } else {
                value = value === undefined ? [] : this.activeItem;
                s = value.includes(name);
            }
            return s;
        },
        getArrow(): any {
            const arrow = this.arrow;
            return arrow;
        },
    },
});
</script>

<style lang="scss">
@import "@/style/common/var.scss";
@import "@/style/common/transition.scss";
.ins-collapse-item {
    position: relative;
    & + & {
        border-top: 1px solid #dcdee2;
    }
    &__header {
        height: 38px;
        line-height: 38px;
        padding-left: 16px;
        color: #666;
        cursor: pointer;
        position: relative;
        border-bottom: 1px solid transparent;
        font-size: 14px;
        transition: all 0.3s ease-in-out;
        & > .ins-icon-right {
            position: relative;
            top: 1px;
            transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
            margin-right: 8px;
        }
        & > .ins-icon-right.ins-collapse-arrow-right {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -8px;
            margin-right: 16px;
        }
        & > .ins-icon-right.ins-collapse-arrow-none {
            display: none;
        }
    }
    &__wrap {
        color: #515a6e;
        padding: 0 16px;
        background-color: #fff;
        box-sizing: border-box;
        font-size: 13px;
        will-change: height;
        overflow: hidden;
        transition: all 0.3s;
        &-box {
            padding: 16px 0;
        }
    }
}
.ins-collapse-item-active {
    .ins-collapse-item__header {
        & > .ins-icon-right {
            transform: rotateZ(90deg);
        }
    }
}
</style>

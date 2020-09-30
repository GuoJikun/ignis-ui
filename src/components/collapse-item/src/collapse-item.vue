<template>
    <div class="ins-collapse-item" :class="[{ 'ins-collapse-item-active': isActive }]">
        <div class="ins-collapse-item__header" @click="handleChange">
            <ins-icon name="chevron-right" :class="['ins-icon-right', `ins-collapse-arrow-${getArrow}`]"> </ins-icon>
            <span>
                <slot name="title">{{ title }}</slot>
            </span>
        </div>
        <collapse-transition>
            <div v-show="isActive" class="ins-collapse-item__wrap">
                <div class="ins-collapse-item__wrap-box">
                    <slot></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist";
import { findBrothersComponents } from "@/utils/findComponent";
import CollapseTransition from "@/utils/collapse-transition";
import InsIcon from "@/components/icon/index";
export default {
    name: `${prefix}CollapseItem`,
    components: { InsIcon, CollapseTransition },
    props: {
        value: [String, Array],
        accordion: {
            type: Boolean,
            default: false,
        },
        title: String,
        name: [String, Number],
    },

    mounted() {
        this.init();
    },
    methods: {
        init() {
            const parent = this.$parent;
            const flag = parent.$options.name !== "FoxCollapse";
            if (flag) {
                throw new Error("ins-collapse-item组件的父组件必须是ins-collapse");
            }
        },
        handleChange() {
            const parent = this.$parent;
            let value = parent.value;

            if (parent.accordion) {
                if (value == this.getName) {
                    value = null;
                } else {
                    value = this.getName.toString();
                }
            } else {
                if (value == undefined) value = [];
                if (value.indexOf(this.getName) !== -1) {
                    value.splice(value.indexOf(this.getName), 1);
                } else {
                    value.push(this.getName);
                }
            }
            parent.$emit("change", value);
        },
    },
    computed: {
        getName() {
            const uid = this._uid;
            const borthers = findBrothersComponents(this, "CollapseItem", false);
            const tmp = borthers.map(item => {
                return item._uid;
            });
            const index = tmp.indexOf(uid);
            return this.name || index;
        },
        isActive() {
            let s = null;
            const parent = this.$parent;
            let value = this.$parent.value;
            const name = this.getName;
            if (parent.accordion) {
                s = value == name;
            } else {
                value = value == undefined ? [] : this.$parent.value;
                s = value.indexOf(name) !== -1;
            }
            return s;
        },
        getArrow() {
            const parent = this.$parent;
            return parent.arrow;
        },
    },
};
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
        /* transition: all 0.3s ease-in-out; */
        & > .ins-icon-right {
            transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
            margin-right: 10px;
        }
        & > .ins-icon-right.ins-collapse-arrow-right {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -7px;
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
        /* will-change: height;
        overflow: hidden; */
        /* transition: all .3s; */
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

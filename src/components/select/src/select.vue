<template>
    <div :class="['ins-select', { 'is-focus': rotate }]" v-clickoutside="handClose">
        <ins-input
            @click.native="handClick"
            v-model="label"
            suffix-icon="chevron-down"
            :disabled="disabled"
            :placeholder="placeholder"
        ></ins-input>
        <transition name="ins-zoom-in-top">
            <div v-show="visiable" class="ins-transfer">
                <ul ref="scrollbar" class="ins-select__scroll">
                    <slot></slot>
                </ul>
                <p class="el-select-dropdown__empty" v-if="emptyText">
                    {{ emptyText }}
                </p>
            </div>
        </transition>
    </div>
</template>
<script>
import { prefix } from "@/utils/assist.js";
import Clickoutside from "@/directives/clickoutside.js";
import FoxInput from "@/components/input";
export default {
    name: `${prefix}Select`,
    components: { FoxInput },
    directives: { Clickoutside },
    model: {
        prop: "value",
        event: "change",
    },
    props: {
        emptyText: String,
        value: [String, Number],
        disabled: Boolean,
        placeholder: {
            type: String,
            default: "请选择",
        },
    },
    data() {
        return {
            visiable: false,
            label: null,
            rotate: false,
        };
    },
    provide() {
        return this;
    },
    methods: {
        handClose() {
            console.log("123");
            this.visiable = false;
            this.rotate = false;
        },
        handleMenuEnter() {
            this.$nextTick(() => this.scrollToOption(this.selected));
        },
        handClick() {
            if (this.disabled) {
                return;
            }
            this.visiable = true;
            this.rotate = true;
        },
        handChange(val, label) {
            this.label = label;
            this.$emit("change", val || null);
        },
    },
};
</script>
<style lang="scss">
.ins-select {
    display: inline-block;
    position: relative;
    transition: transform 0.3s;
    &__scroll {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    &.is-focus {
        .ins-icon-chevron-down {
            transform: rotate(-180deg);
        }
    }
}

.ins-transfer {
    position: absolute;
    left: 0;
    top: 36px;
    background-color: #fff;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
    border: 1px solid #efefef;
    border-radius: 4px;
    height: 183px;
}
</style>

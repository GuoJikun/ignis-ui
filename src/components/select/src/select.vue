<template>
    <div :class="['ins-select', { 'is-focus': rotate }]" v-clickoutside="handClose">
        <ins-input
            @click="handClick"
            v-model="label"
            suffix-icon="chevron-down"
            :disabled="disabled"
            :placeholder="placeholder"
        ></ins-input>
        <transition name="ins-zoom-in-top">
            <ins-dropdown v-show="visiable" :reference="el" class="ins-transfer">
                <ul ref="scrollbar" class="ins-select__scroll">
                    <slot></slot>
                </ul>
                <p class="el-select-dropdown__empty" v-if="emptyText">
                    {{ emptyText }}
                </p>
            </ins-dropdown>
        </transition>
    </div>
</template>
<script lang="ts">
import { prefix } from "@/utils/assist";
import Clickoutside from "@/directives/clickoutside";
import InsInput from "@/components/input";
import InsDropdown from "@/components/dropdown";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
    name: `${prefix}Select`,
    components: { InsInput, InsDropdown },
    directives: { Clickoutside },

    props: {
        emptyText: String,
        modelValue: [String, Number],
        disabled: Boolean,
        placeholder: {
            type: String,
            default: "请选择",
        },
        valueKey: String,
    },
    setup() {
        const data: { [x: string]: any } = reactive({
            visiable: false,
            label: null,
            rotate: false,
            el: null,
        });
        return {
            ...toRefs(data),
        };
    },
    provide() {
        return {
            parent: this,
        };
    },
    beforeMount() {
        this.el = this.$el;
        console.log(this.$el);
    },
    methods: {
        handClose() {
            console.log("123");
            this.visiable = false;
            this.rotate = false;
        },
        handClick() {
            if (this.disabled) {
                return;
            }
            this.visiable = true;
            this.rotate = true;
        },
        handChange(val: string | number, label: string) {
            this.label = label;
            this.$emit("change", val || null);
        },
    },
});
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
    /* position: absolute;
    left: 0;
    top: 36px;
    background-color: #fff;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
    border: 1px solid #efefef;
    border-radius: 4px;
    height: 183px; */
}
</style>

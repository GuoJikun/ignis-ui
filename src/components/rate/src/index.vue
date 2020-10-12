<template>
    <div class="ins-rate">
        <div class="ins-rate__icon">
            <ins-icon
                :class="['ins-rate__icon-item']"
                :name="cur < item ? icon : activeIcon"
                v-for="item in count"
                :key="item"
                :style="getIconColor(item)"
                @mouseenter="handleMouseenter($event, item)"
                @click="handleClick(item)"
            >
                <i v-if="allowHalf" :style="['color', activeIconColor]"></i>
            </ins-icon>
        </div>
        <span class="ins-rate__text" v-show="showInfo">
            <slot>{{ value }}</slot>
        </span>
    </div>
</template>

<script lang="ts">
import { prefix } from "@/utils/assist";
import InsIcon from "@/components/icon/index";
import { defineComponent, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
    name: `${prefix}Rate`,
    components: { InsIcon },
    props: {
        value: {
            type: Number,
            default: 0,
        },
        count: {
            type: Number,
            default: 5,
        },
        icon: {
            type: String,
            default: "star",
        },
        activeIcon: {
            type: String,
            default: "star-fill",
        },
        iconColor: {
            type: String,
            default: "#c0c4cc",
        },

        activeIconColor: {
            type: String,
            default: "#f5a623",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        allowHalf: {
            type: Boolean,
            default: false,
        },
        showInfo: {
            type: Boolean,
            default: true,
        },
        tigger: {
            type: String,
            default: "hover",
            validator: (value: string) => {
                return ["hover", "click"].includes(value);
            },
        },
    },
    setup(props, { emit }) {
        const data = reactive({
            cur: 0,
        });
        onMounted(() => {
            data.cur = props.value;
        });
        const handleMouseenter = (ev: any, val: number) => {
            if (props.disabled) {
                return false;
            }
            if (props.tigger === "hover") {
                data.cur = val;
                emit("update:value", data.cur);
                emit("change", data.cur);
                // this.dispatch("FormItem", "on-form-change", this.cur);
            }
        };
        const handleClick = (val: any) => {
            if (props.disabled) {
                return false;
            }
            if (props.tigger === "click") {
                data.cur = val;
                emit("update:value", data.cur);
                emit("change", data.cur);
                // this.dispatch("FormItem", "on-form-change", this.cur);
            }
        };
        const getIconColor = (item: number) => {
            if (data.cur < item) {
                return {
                    color: props.iconColor,
                };
            } else {
                return {
                    color: props.activeIconColor,
                };
            }
        };
        return { ...toRefs(data), handleMouseenter, handleClick, getIconColor };
    },
    watch: {
        value(val) {
            this.cur = val;
        },
    },
});
</script>

<style lang="scss">
.ins-rate {
    display: flex;
    &__icon {
        &-item {
            margin: 0 2px;
            position: relative;
            display: inline-block;
            cursor: pointer;
            font-size: 16px;
            &-half {
                display: block;
                width: 0;
            }
        }
        &-checked {
            color: #f5a623;
        }
    }
    &__text {
        margin-left: 10px;
    }
}
</style>

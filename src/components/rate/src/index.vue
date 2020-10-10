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
                @mouseleave="handleMouseleave(item)"
                @click="handleClick(item)"
            >
                <i v-if="allowHalf" :style="['color', activeIconColor]"></i>
            </ins-icon>
        </div>
        <span class="ins-rate__text" v-show="showInfo">
            <slot>{{ value }}</slot>
        </span>
        <input type="text" hidden :value="value" />
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import InsIcon from "@/components/icon/index";
import Emitter from "@/mixins/emitter";

export default {
    name: `${prefix}Rate`,
    components: { InsIcon },
    mixins: [Emitter],
    model: {
        props: "value",
        event: "change",
    },
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
        iconColor: {
            type: String,
            default: "#c0c4cc",
        },
        activeIcon: {
            type: String,
            default: "star-fill",
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
        tigger: {
            type: String,
            default: "hover",
            validator(value) {
                return ["hover", "click"].includes(value);
            },
        },
        showInfo: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            cur: this.value,
        };
    },
    methods: {
        handleMouseenter(ev, val) {
            if (this.disabled) {
                return false;
            }
            if (this.tigger === "hover") {
                this.cur = val;
                this.$emit("change", this.cur);
                this.dispatch("FormItem", "on-form-change", this.cur);
            }
        },
        handleMouseleave() {},
        handleClick(val) {
            if (this.disabled) {
                return false;
            }
            if (this.tigger === "click") {
                this.cur = val;
                this.$emit("change", this.cur);
                this.dispatch("FormItem", "on-form-change", this.cur);
            }
        },
        getIconColor(item) {
            if (this.cur < item) {
                return {
                    color: this.iconColor,
                };
            } else {
                return {
                    color: this.activeIconColor,
                };
            }
        },
    },
    watch: {
        value(val) {
            this.cur = val;
        },
    },
};
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

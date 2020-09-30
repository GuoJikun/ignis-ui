<template>
    <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
        <div :class="[prefixCls + '-rel']" ref="reference">
            <slot></slot>
        </div>
        <transition name="fade">
            <div
                :class="[prefixCls + '-popper', prefixCls + '-' + theme]"
                :style="dropStyles"
                ref="popper"
                v-show="!disabled && (visible || always)"
                @mouseenter="handleShowPopper"
                @mouseleave="handleClosePopper"
                :data-transfer="transfer"
            >
                <div :class="[prefixCls + '-content']">
                    <div :class="[prefixCls + '-arrow']"></div>
                    <div :class="innerClasses" :style="innerStyles">
                        <slot name="content">{{ content }}</slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { prefix } from "@/utils/assist.js";
import { oneOf } from "@/utils/assist.js";
import Popper from "@/utils/vue-popper.js";
import { transferIndex, transferIncrease } from "@/utils/transfer-queue";
const prefixCls = "ins-tooltip";
export default {
    name: `${prefix}Tooltip`,
    mixins-: [Popper],
    props: {
        placement: {
            validator(value) {
                const types = [
                    "top",
                    "top-start",
                    "top-end",
                    "bottom",
                    "bottom-start",
                    "bottom-end",
                    "left",
                    "left-start",
                    "left-end",
                    "right",
                    "right-start",
                    "right-end",
                ];
                return types.includes(value);
            },
            default: "bottom",
        },
        content: {
            type: [String, Number],
            default: "",
        },
        delay: {
            type: Number,
            default: 100,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        controlled: {
            // under this prop,Tooltip will not close when mouseleave
            type: Boolean,
            default: false,
        },
        always: {
            type: Boolean,
            default: false,
        },
        transfer: {
            type: Boolean,
            default() {
                return !this.$IVIEW || this.$IVIEW.transfer === "" ? false : this.$IVIEW.transfer;
            },
        },
        theme: {
            validator(value) {
                return oneOf(value, ["dark", "light"]);
            },
            default: "dark",
        },
        maxWidth: {
            type: [String, Number],
        },
    },
    data() {
        return {
            prefixCls: prefixCls,
            tIndex: this.handleGetIndex(),
        };
    },
    computed: {
        innerStyles() {
            const styles = {};
            if (this.maxWidth) styles["max-width"] = `${this.maxWidth}px`;
            return styles;
        },
        innerClasses() {
            return [
                `${prefixCls}-inner`,
                {
                    [`${prefixCls}-inner-with-width`]: !!this.maxWidth,
                },
            ];
        },
        dropStyles() {
            let styles = {};
            if (this.transfer) styles["z-index"] = 1060 + this.tIndex;
            return styles;
        },
    },
    watch: {
        content() {
            this.updatePopper();
        },
    },
    methods: {
        handleShowPopper() {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.visible = true;
            }, this.delay);
            this.tIndex = this.handleGetIndex();
        },
        handleClosePopper() {
            if (this.timeout) {
                clearTimeout(this.timeout);
                if (!this.controlled) {
                    this.timeout = setTimeout(() => {
                        this.visible = false;
                    }, 100);
                }
            }
        },
        handleGetIndex() {
            transferIncrease();
            return transferIndex;
        },
    },
    mounted() {
        if (this.always) {
            this.updatePopper();
        }
    },
};
</script>
<style lang="scss">
.ins-tooltip {
    display: inline-block;
    &-rel {
        @extend .ins-tooltip;
        position: relative;
        width: inherit;
    }
    &-popper {
        display: block;
        visibility: visible;
        font-size: 14px;
        line-height: 1.5;
        position: absolute;
        z-index: 1060;
        &[x-placement^="top"] {
            padding: 5px 0 8px;
            & .ins-tooltip-arrow {
                bottom: 3px;
                border-width: 5px 5px 0;
                border-top-color: rgba(70, 76, 91, 0.9);
            }
        }
        &[x-placement="top"] {
            & .ins-tooltip-arrow {
                left: 50%;
                margin-left: -5px;
            }
        }
        &[x-placement="top-start"] {
            & .ins-tooltip-arrow {
                left: 16px;
            }
        }
        &[x-placement="top-end"] {
            & .ins-tooltip-arrow {
                right: 16px;
            }
        }
        &[x-placement^="bottom"] {
            padding: 8px 0 5px;
            & .ins-tooltip-arrow {
                top: 3px;
                border-width: 0 5px 5px;
                border-bottom-color: rgba(70, 76, 91, 0.9);
            }
        }
        &[x-placement="bottom"] {
            & .ins-tooltip-arrow {
                left: 50%;
                margin-left: -5px;
            }
        }
        &[x-placement="bottom-start"] {
            & .ins-tooltip-arrow {
                left: 16px;
            }
        }
        &[x-placement="bottom-end"] {
            & .ins-tooltip-arrow {
                right: 16px;
            }
        }
        &[x-placement^="left"] {
            padding: 0 8px 0 5px;
            & .ins-tooltip-arrow {
                right: 3px;
                border-width: 5px 0 5px 5px;
                border-left-color: rgba(70, 76, 91, 0.9);
            }
        }
        &[x-placement="left"] {
            & .ins-tooltip-arrow {
                top: 50%;
                margin-top: -5px;
            }
        }
        &[x-placement="left-start"] {
            & .ins-tooltip-arrow {
                top: 8px;
            }
        }
        &[x-placement="left-end"] {
            & .ins-tooltip-arrow {
                bottom: 8px;
            }
        }
        &[x-placement^="right"] {
            padding: 0 5px 0 8px;
            & .ins-tooltip-arrow {
                left: 3px;
                border-width: 5px 5px 5px 0;
                border-right-color: rgba(70, 76, 91, 0.9);
            }
        }
        &[x-placement="right"] {
            & .ins-tooltip-arrow {
                top: 50%;
                margin-top: -5px;
            }
        }
        &[x-placement="right-start"] {
            & .ins-tooltip-arrow {
                top: 8px;
            }
        }
        &[x-placement="right-end"] {
            & .ins-tooltip-arrow {
                bottom: 8px;
            }
        }
    }
    &-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    &-inner {
        max-width: 250px;
        min-height: 34px;
        padding: 8px 12px;
        color: #fff;
        text-align: left;
        text-decoration: none;
        background-color: rgba(70, 76, 91, 0.9);
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        white-space: nowrap;
    }
    &-light {
        &.ins-tooltip-popper {
            &[x-placement^="top"] {
                padding: 7px 0 10px;
                & .ins-tooltip-arrow {
                    bottom: 3px;
                    border-width: 7px 7px 0;
                    border-top-color: hsla(0, 0%, 85%, 0.5);
                    &::after {
                        content: "";
                        bottom: 1px;
                        margin-left: -7px;
                        border-bottom-width: 0;
                        border-top-width: 7px;
                        border-top-color: #fff;
                    }
                }
            }
            &[x-placement="top"] {
                & .ins-tooltip-arrow {
                    left: 50%;
                    margin-left: -7px;
                }
            }
            &[x-placement="top-start"] {
                & .ins-tooltip-arrow {
                    left: 16px;
                }
            }
            &[x-placement="top-end"] {
                & .ins-tooltip-arrow {
                    right: 16px;
                }
            }
            &[x-placement^="bottom"] {
                padding: 10px 0 7px;
                & .ins-tooltip-arrow {
                    top: 3px;
                    border-width: 0 7px 7px;
                    border-bottom-color: hsla(0, 0%, 85%, 0.5);
                    &::after {
                        content: " ";
                        top: 1px;
                        margin-left: -7px;
                        border-top-width: 0;
                        border-bottom-width: 7px;
                        border-bottom-color: #fff;
                    }
                }
            }
            &[x-placement="bottom"] {
                & .ins-tooltip-arrow {
                    left: 50%;
                    margin-left: -7px;
                }
            }
            &[x-placement="bottom-start"] {
                & .ins-tooltip-arrow {
                    left: 16px;
                }
            }
            &[x-placement="bottom-end"] {
                & .ins-tooltip-arrow {
                    right: 16px;
                }
            }
            &[x-placement^="left"] {
                padding: 0 10px 0 7px;
                & .ins-tooltip-arrow {
                    right: 3px;
                    border-width: 7px 0 7px 7px;
                    border-left-color: hsla(0, 0%, 85%, 0.5);
                    &::after {
                        content: "";
                        right: 1px;
                        margin-top: -7px;
                        border-right-width: 0;
                        border-left-width: 7px;
                        border-left-color: #fff;
                    }
                }
            }
            &[x-placement="left"] {
                & .ins-tooltip-arrow {
                    top: 50%;
                    margin-top: -7px;
                }
            }
            &[x-placement="left-start"] {
                & .ins-tooltip-arrow {
                    top: 8px;
                }
            }
            &[x-placement="left-end"] {
                & .ins-tooltip-arrow {
                    bottom: 8px;
                }
            }
            &[x-placement^="right"] {
                padding: 0 7px 0 10px;
                & .ins-tooltip-arrow {
                    left: 3px;
                    border-width: 7px 7px 7px 0;
                    border-right-color: hsla(0, 0%, 85%, 0.5);
                    &::after {
                        content: "";
                        left: 1px;
                        margin-top: -7px;
                        border-left-width: 0;
                        border-right-width: 7px;
                        border-right-color: #fff;
                    }
                }
            }
            &[x-placement="right"] {
                & .ins-tooltip-arrow {
                    top: 50%;
                    margin-top: -7px;
                }
            }
            &[x-placement="right-start"] {
                & .ins-tooltip-arrow {
                    top: 8px;
                }
            }
            &[x-placement="right-end"] {
                & .ins-tooltip-arrow {
                    bottom: 8px;
                }
            }
        }
        .ins-tooltip-arrow {
            &::after {
                display: block;
                width: 0;
                height: 0;
                position: absolute;
                border: 7px solid transparent;
                content: "";
            }
        }
        .ins-tooltip-inner {
            background-color: #fff;
            color: #515a6e;
        }
    }
}
</style>

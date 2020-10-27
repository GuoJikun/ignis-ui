<template>
    <div :class="['ins-select', { 'is-focus': rotate }]" v-clickoutside="handClose" ref="reference">
        <ins-input
            @click="handClick"
            v-model="label"
            suffix-icon="chevron-down"
            :disabled="disabled"
            :placeholder="placeholder"
        ></ins-input>
        <teleport to="body">
            <!-- <transition name="ins-zoom-in-top"> -->
            <div
                id="tooltip"
                class="ins-transfer"
                ref="popper"
                :data-popper-placement="placement"
                v-show="visiable"
                :style="{ width: widths }"
            >
                <div data-popper-arrow class="ins-transfer-arrow" ref="arrow"></div>
                <div class="ins-transfer-wrap">
                    <ul ref="scrollbar" class="ins-select__scroll">
                        <slot></slot>
                    </ul>
                    <p class="el-select-dropdown__empty" v-if="emptyText">
                        {{ emptyText }}
                    </p>
                </div>
            </div>
            <!-- </transition> -->
        </teleport>
    </div>
</template>
<script lang="ts">
import { prefix } from "@/utils/assist";
import Clickoutside from "@/directives/clickoutside";
import InsInput from "@/components/input";
import { defineComponent, reactive, ref, toRefs } from "vue";
import { createPopper } from "@popperjs/core";

export default defineComponent({
    name: `${prefix}Select`,
    components: { InsInput },
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
        placement: {
            type: String,
            validator: (value: string) => {
                const reg = /^(auto|left|top|bottom|right)(-start|-end)?$/g;
                return reg.test(value);
            },
        },
        options: {
            type: Object,
            default: () => {
                return {
                    modifiers: [
                        {
                            name: "computeStyles",
                            options: {
                                gpuAcceleration: false, // true by default
                            },
                        },
                        {
                            name: "offset",
                            options: {
                                offset: [0, 8],
                            },
                        },
                        {
                            name: "arrow",
                            options: {
                                element: document.querySelector("#arrow"),
                                padding: 8, // 5px from the edges of the popper
                            },
                        },
                    ],
                };
            },
        },
    },
    setup(props, { emit }) {
        const reference: any = ref<null | HTMLElement>(null);
        const popper: any = ref<null | HTMLElement>(null);
        const arrow: any = ref<null | HTMLElement>(null);

        const poperInstance: any = ref(null);
        const widths: any = ref(null);

        const data: Record<string, any> = reactive({
            visiable: false,
            label: null,
            rotate: false,
        });
        const handClose = () => {
            data.visiable = false;
            data.rotate = false;
        };
        const handChange = (val: string | number, label: string) => {
            data.label = label;
            emit("change", val || null);
        };
        const handClick = () => {
            if (props.disabled) {
                return;
            }
            data.visiable = true;
            data.rotate = true;
        };
        return {
            ...toRefs(data),
            poperInstance,
            reference,
            popper,
            arrow,
            handClose,
            handChange,
            handClick,
            widths,
        };
    },
    provide() {
        return {
            parent: this,
        };
    },
    mounted() {
        this.createInstance();
        this.widths = this.getWidth();
    },
    methods: {
        getWidth(): string {
            return getComputedStyle(this.reference).width.toString();
        },
        createInstance() {
            this.destroy();
            const opts: any = {
                placement: this.placement ? this.placement : "auto",
                modifiers: [
                    {
                        name: "computeStyles",
                        options: {
                            gpuAcceleration: true, // true by default
                            adaptive: true,
                        },
                    },
                    {
                        name: "offset",
                        options: {
                            offset: [0, 8],
                        },
                    },
                    {
                        name: "arrow",
                        options: {
                            element: this.arrow,
                            padding: 4, // 5px from the edges of the popper
                        },
                    },
                    {
                        name: "applyArrowHide",
                        enabled: true,
                        phase: "write",
                        fn({ state }: any) {
                            const { arrow } = state.elements;

                            if (arrow) {
                                if (state.modifiersData.arrow.centerOffset !== 0) {
                                    arrow.setAttribute("data-hide", "");
                                } else {
                                    arrow.removeAttribute("data-hide");
                                }
                            }
                        },
                    },
                ],
                onFirstUpdate: () => {
                    this.poperInstance.update();
                },
            };
            this.poperInstance = createPopper(this.reference, this.popper, opts);
        },
        updateInstance() {
            this.poperInstance ? this.poperInstance.update() : this, this.createInstance();
        },
        destroy() {
            if (this.poperInstance) {
                this.poperInstance.destroy();
                this.poperInstance = null;
            }
        },
    },
    updated() {
        this.updateInstance();
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
    top: 36px; */

    width: 100%;
    z-index: 1000;
    // padding: 4px 8px;
    &-wrap {
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #dedede;
        height: 183px;
        border-radius: 4px;
        position: relative;
    }
    &-arrow {
        position: absolute;
        width: 8px;
        height: 8px;
        z-index: 1;
        box-sizing: border-box;
        &::before {
            position: absolute;
            width: 8px;
            height: 8px;
            z-index: 1;
            box-sizing: border-box;
        }

        &::before {
            content: "";
            transform: rotate(45deg);
            background: #fff;
            border: 1px solid #dedede;
            box-sizing: border-box;
        }
    }
    &[data-popper-placement^="top"] > &-arrow {
        bottom: -4px;
        &::before {
            border-width: 0 1px 1px 0;
        }
    }

    &[data-popper-placement^="bottom"] > &-arrow {
        top: -4px;
        &::before {
            border-width: 1px 0 0 1px;
        }
    }

    &[data-popper-placement^="left"] > &-arrow {
        right: -4px;
        &::before {
            border-width: 1px 1px 0 0;
        }
    }

    &[data-popper-placement^="right"] > &-arrow {
        left: -4px;
        &::before {
            border-width: 0 0 1px 1px;
        }
    }
}
</style>

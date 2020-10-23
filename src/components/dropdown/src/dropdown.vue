<template>
    <div id="tooltip" class="ins-transfer" :data-popper-placement="placement">
        <div data-popper-arrow id="arrow"></div>
        <div class="ins-transfer-warp">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, toRefs } from "vue";
import { createPopper } from "@popperjs/core";

export default defineComponent({
    props: {
        placement: {
            type: String,
            validator: (value: string) => {
                const reg = /^(left|top|bottom|right)(-start|-end)?$/g;
                return reg.test(value);
            },
        },
        modelValue: Boolean,
        reference: HTMLElement,
        popper: HTMLElement,
        offset: {
            default: 8,
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
    setup() {
        const parent: any = inject("parent");

        const data: any = reactive({
            popperJS: null,
        });
        return {
            parent,
            ...toRefs(data),
        };
    },
    methods: {
        createPopperjs() {
            const options = this.options;
            const popper = this.$el;
            const reference = this.reference || this.parent.el;

            // console.log(!popper, this.parent.el);
            if (!popper || !reference) return;

            if (this.popperJS && this.popperJS.destroy) {
                this.popperJS.destroy();
            }
            if (this.popperJS) {
                this.popperJS.destroy();
            }

            options.placement = this.placement;

            // if (!options.modifiers.offset) {
            //     options.modifiers.offset = {};
            // }
            // options.modifiers.offset.offset = this.offset;
            // options.onCreate = () => {
            //     this.$nextTick(this.updatePopper);
            //     this.$emit("created", this);
            // };
            this.popperJS = createPopper(reference, popper, options);
            console.log(this.popperJS, "123");
        },
        updatePopper() {
            this.popperJS ? this.popperJS.update() : this.createPopperjs();
        },
    },
});
</script>

<style lang="scss">
.ins-transfer {
    &-warp {
        background-color: #fff;
        width: 100%;
        z-index: 1000;
        box-sizing: border-box;
        border: 1px solid #efefef;
        border-radius: 4px;
        height: 183px;
    }
}
#arrow {
    width: 8px;
    height: 8px;
    z-index: -1;
    position: relative;
}
#arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: -1;
}

#arrow::before {
    content: "";
    transform: rotate(45deg);
    background: #333;
}

#tooltip[data-popper-placement^="top"] > #arrow {
    bottom: -4px;
}

#tooltip[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
}

#tooltip[data-popper-placement^="left"] > #arrow {
    right: -4px;
}

#tooltip[data-popper-placement^="right"] > #arrow {
    left: -4px;
}
</style>

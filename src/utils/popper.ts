import { defineComponent } from "vue";
import { createPopper } from "@popperjs/core";

export default defineComponent({
    props: {
        placement: {
            type: String,
            default: "bottom",
            validator: (value: string) => {
                const reg = /^(left|top|bottom|right)(-start|-end)?$/g;
                return reg.test(value);
            },
        },
        modelValue: Boolean,
        reference: HTMLElement,
        popper: HTMLElement,
        offset: {
            default: 0,
        },
        options: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    setup(props, { emit }) {
        let popperJS: any = null;
        const createPopperjs = () => {
            if (!window) return;

            const options = props.options;
            const popper = props.popper;
            const reference = props.reference;

            if (!popper || !reference) return;

            if (popperJS && popperJS.destroy) {
                popperJS.destroy();
            }
            if (popperJS) {
                popperJS.destroy();
            }

            options.placement = props.placement;

            if (!options.modifiers.offset) {
                options.modifiers.offset = {};
            }
            options.modifiers.offset.offset = props.offset;
            // options.onCreate = () => {
            //     attrs.nextTick(updatePopper);
            //     emit("created", this);
            // };

            popperJS = createPopper(reference, popper, options);
        };
        const updatePopper = () => {
            popperJS ? popperJS.update() : createPopperjs();
        };

        return { popperJS, createPopperjs, updatePopper };
    },
});

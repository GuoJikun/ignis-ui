<script lang="ts">
import { prefix } from "@/utils/assist";
import { defineComponent, h } from "vue";

export default defineComponent({
    name: `${prefix}Timeline`,
    props: {
        reverse: Boolean,
    },
    setup(props, { slots }: any) {
        const defaultSlots = slots.default();
        const children = props.reverse ? defaultSlots : [...defaultSlots].reverse();
        return () => h("ul", { class: "ins-timeline" }, children);
    },
});
</script>

<style lang="scss">
@import "@/style/common/var.scss";
.ins-timeline {
    margin: 0;
    font-size: $ins--font-size-base;
    list-style: none;

    & .ins-timeline-item:last-child {
        & .ins-timeline-item__tail {
            display: none;
        }
    }
}
</style>

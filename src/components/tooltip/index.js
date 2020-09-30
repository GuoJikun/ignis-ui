import Tooltip from "./src/index.vue";

Tooltip.install = (app: any): void => {
    app.component(Tooltip.name, Tooltip);
};

export default Tooltip;

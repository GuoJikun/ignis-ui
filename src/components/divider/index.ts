import Divider from "./src/divider.vue";

Divider.install = (app: any): void => {
    app.component(Divider.name, Divider);
};

export default Divider;

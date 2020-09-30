import Checkbox from "./src/index.vue";

Checkbox.install = (app: any): void => {
    app.component(Checkbox.name, Checkbox);
};

export default Checkbox;

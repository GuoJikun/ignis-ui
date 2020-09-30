import CheckboxGroup from "./src/index.vue";

CheckboxGroup.install = (app: any): void => {
    app.component(CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup;

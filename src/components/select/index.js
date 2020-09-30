import Select from "./src/select.vue";

Select.install = (app: any): void => {
    app.component(Select.name, Select);
};

export default Select;

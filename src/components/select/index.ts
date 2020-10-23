import Select from "./src/select.vue";
import { App } from "vue";

Select.install = (app: App): void => {
    app.component(Select.name, Select);
};

export default Select;

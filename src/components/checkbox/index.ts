import { ComponentOptions } from "vue";
import Checkbox from "./src/index.vue";

Checkbox.install = ({ component }: ComponentOptions): void => {
    component(Checkbox.name, Checkbox);
};

export default Checkbox;

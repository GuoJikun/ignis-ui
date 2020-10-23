import { App } from "vue";
import Dropdown from "./src/dropdown.vue";

Dropdown.install = ({ component }: App) => {
    component(Dropdown.name, Dropdown);
};

export default Dropdown;

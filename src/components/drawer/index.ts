import { ComponentOptions } from "vue";
import Drawer from "./src/drawer.vue";

Drawer.install = ({ component }: ComponentOptions) => {
    component(Drawer.name, Drawer);
};

export default Drawer;

import Switch from "./src/switch.vue";

Switch.install = vue => {
    vue.component(Switch.name, Switch);
};

export default Switch;

import Switch from "./src/switch.vue";

Switch.install = ({ component }: any) => {
    component(Switch.name, Switch);
};

export default Switch;

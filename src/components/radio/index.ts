import Radio from "./src/index.vue";

Radio.install = ({ component }: any): void => {
    component(Radio.name, Radio);
};

export default Radio;

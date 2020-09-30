import Radio from "./src/index.vue";

Radio.install = (app: any): void => {
    app.component(Radio.name, Radio);
};

export default Radio;

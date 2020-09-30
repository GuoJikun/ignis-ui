import RadioGroup from "./src/index.vue";

RadioGroup.install = (app: any): void => {
    app.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;

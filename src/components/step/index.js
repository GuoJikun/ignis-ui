import Step from "./src/index.vue";

Step.install = (app: any): void => {
    app.component(Step.name, Step);
};

export default Step;

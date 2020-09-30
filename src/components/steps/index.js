import Steps from "./src/index.vue";

Steps.install = (app: any): void => {
    app.component(Steps.name, Steps);
};

export default Steps;

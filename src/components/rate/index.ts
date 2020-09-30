import Rate from "./src/index.vue";

Rate.install = (app: any): void => {
    app.component(Rate.name, Rate);
};

export default Rate;

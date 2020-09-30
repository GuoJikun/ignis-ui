import Col from "./src/col.vue";

Col.install = (app: any): void => {
    app.component(Col.name, Col);
};

export default Col;

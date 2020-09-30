import Col from "./src/col.vue";

Col.install = vue => {
    vue.component(Col.name, Col);
};

export default Col;

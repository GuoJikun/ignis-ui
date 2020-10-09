import Collapse from "./src/collapse.vue";

Collapse.install = (app: any) => {
    app.component(Collapse.name, Collapse);
};

export default Collapse;

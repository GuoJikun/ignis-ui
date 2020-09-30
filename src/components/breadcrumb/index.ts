import Breadcrumb from "./src/breadcrumb.vue";

Breadcrumb.install = (app: any): void => {
    app.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;

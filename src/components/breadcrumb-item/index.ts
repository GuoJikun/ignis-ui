import BreadcrumbItem from "./src/breadcrumb-item.vue";

BreadcrumbItem.install = (app: any): void => {
    app.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;

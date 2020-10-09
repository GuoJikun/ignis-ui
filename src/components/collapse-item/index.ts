import CollapseItem from "./src/collapse-item.vue";

CollapseItem.install = (app: any) => {
    app.component(CollapseItem.name, CollapseItem);
};

export default CollapseItem;

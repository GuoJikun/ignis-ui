import Tag from "./src/index.vue";

Tag.install = (app: any): void => {
    app.component(Tag.name, Tag);
};
export default Tag;

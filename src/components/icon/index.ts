import Icon from "./src/icon.vue";

Icon.install = (app: any) => {
    app.component(Icon.name, Icon);
};

export default Icon;

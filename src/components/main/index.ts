import Main from "./src/main.vue";

Main.install = (app: any): void => {
    app.component(Main.name, Main);
};

export default Main;

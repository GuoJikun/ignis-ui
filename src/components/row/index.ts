import Row from "./src/row.vue";

Row.install = (app: any): void => {
    app.component(Row.name, Row);
};

export default Row;

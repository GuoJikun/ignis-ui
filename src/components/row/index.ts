import Row from "./src/row.vue";

Row.install = vue => {
    vue.component(Row.name, Row);
};

export default Row;

import Table from "./src/table.vue";

Table.install = vue => {
    vue.component(Table.name, Table);
};

export default Table;

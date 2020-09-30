import Cell from "./src/cell.vue";

Cell.install = vue => {
    vue.component(Cell.name, Cell);
};

export default Cell;

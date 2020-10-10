import Cell from "./src/cell.vue";

Cell.install = ({ component }: any) => {
    component(Cell.name, Cell);
};

export default Cell;

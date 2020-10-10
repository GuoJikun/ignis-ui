import CellGroup from "./src/cell-group.vue";

CellGroup.install = ({ component }: any) => {
    component(CellGroup.name, CellGroup);
};
export default CellGroup;

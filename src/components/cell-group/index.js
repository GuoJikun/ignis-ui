import CellGroup from "./src/cell-group.vue";

CellGroup.install = vue => {
    vue.component(CellGroup.name, CellGroup);
};
export default CellGroup;

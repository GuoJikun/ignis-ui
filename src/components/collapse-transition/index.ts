import CollapseTransition from "./src/collapse-transition.vue";

CollapseTransition.install = ({ component }: any) => {
    component(CollapseTransition.name, CollapseTransition);
};

export default CollapseTransition;

import Steps from "./src/index.vue";

Steps.install = ({ component }: any) => {
    component(Steps.name, Steps);
};

export default Steps;

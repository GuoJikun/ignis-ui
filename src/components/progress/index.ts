import Progress from "./src/index.vue";

Progress.install = (app: any): void => {
    app.component(Progress.name, Progress);
};

export default Progress;

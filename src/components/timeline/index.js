import Timeline from "./src/index.vue";

Timeline.install = (app: any): void => {
    app.component(Timeline.name, Timeline);
};

export default Timeline;

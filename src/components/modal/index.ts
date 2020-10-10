import Modal from "./src/index.vue";

Modal.install = (app: any) => {
    app.component(Modal.name, Modal);
};

export default Modal;

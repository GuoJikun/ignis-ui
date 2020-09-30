import Card from "./src/card.vue";

Card.install = (app: any): void => {
    app.component(Card.name, Card);
};

export default Card;

import Card from "../Card/Card";
import { TCard } from "../../types";

export type CardsListProps = {
  cards: TCard[]
};
export default function CardsList({ cards }: CardsListProps) {
  return (
    <div className={`cards-list grid grid-cols-12 gap-6 md:gap-12 grid-row-start`} dir="ltr">
      {
        cards.map(card => <Card key={card.id} card={card} />)
      }
    </div>
  );
}

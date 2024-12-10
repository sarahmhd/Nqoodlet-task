import { TCard } from "../../types";
import Card from "../Card/Card";

export type CardsListProps = {
  cards: TCard[]
};
export default function CardsList({ cards }: CardsListProps) {
  return (
    <div className="cards-list grid grid-cols-12 gap-6 md:gap-12">
      {
        cards.map(card => <Card key={card.id} card={card} />)
      }
    </div>
  );
}

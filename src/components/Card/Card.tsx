import { TCard } from "../../types";

export type CardProps = {
  card: TCard
};
export default function Card({ card }: CardProps) {
  return (
    <div className={`card rounded-[30px] p-8 relative col-span-12 md:col-span-6 aspect-[1.586] max-w-screen bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(${card.is_physical
          ? '../../../src/assets/images/physicalCard.png'
          : '../../../src/assets/images/virtualCard.png'
          })`,
      }}>

      <img className="absolute top-8 right-8 w-[80px]" src="../../../src/assets/images/prepaidBankLogo.png" />
      <div className="card-buttons absolute bottom-8 left-8 w-[calc(100%-4rem)] md:w-[calc(100%-8rem)] md:left-16 flex items-center justify-between">
        <h6 className={`text-3xl tracking-wide bold ${card.is_physical ? 'text-white' : 'text-[#222]'}`}>{card.last_four}</h6>
        <img className="w-[80px]" src="../../../src/assets/images/mastercardLogo.png" />
      </div>
    </div>
  );
}

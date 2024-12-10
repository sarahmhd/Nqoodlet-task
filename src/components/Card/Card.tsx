import { TCard } from "../../types";

import physicalCardImage from '/src/assets/images/physicalCard.png';
import virtualCardImage from '/src/assets/images/virtualCard.png';
import prepaidBankLogo from '/src/assets/images/prepaidBankLogo.png';
import mastercardLogo from '/src/assets/images/mastercardLogo.png';

export type CardProps = {
  card: TCard
};
export default function Card({ card }: CardProps) {
  return (
    <div className={`card rounded-[30px] p-8 z-10 relative col-span-12 md:col-span-6 aspect-[1.586] max-w-screen bg-cover bg-no-repeat ${card.status === 'inactive' && 'grayscale'} ${card.status === 'terminated' && 'blur-[2px]'} `}
      style={{
        backgroundImage: `url(${card.is_physical
          ? physicalCardImage
          : virtualCardImage
          })`,
      }}>
      {
        card.status === "terminated" ? (
          <div className="lock-icon w-full h-full absolute inset-0 z-10 flex items-center justify-center">
            <svg className="w-[4rem] h-[4rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M12 16.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97626 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97626 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke="currentColor" stroke-width="1.5" />
              <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        )
          : null
      }
      <img className="absolute top-8 right-8 w-[80px]" src={prepaidBankLogo} />
      <div className="card-buttons absolute bottom-8 left-8 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] md:left-16 flex items-center justify-between">
        <h6 className={`text-xl tracking-wide bold ${card.is_physical ? 'text-white' : 'text-[#222]'}`}>{card.last_four}</h6>
        <img className="w-[80px]" src={mastercardLogo} />
      </div>
    </div>
  );
}

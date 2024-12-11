import { useState } from "react";
import { TCard } from "../../types";
import mastercardLogo from '/src/assets/images/mastercardLogo.png';
import physicalCardImage from '/src/assets/images/physicalCard.png';
import prepaidBankLogo from '/src/assets/images/prepaidBankLogo.png';
import virtualCardImage from '/src/assets/images/virtualCard.png';
import physicalCardImageBg from '/src/assets/images/physicalCard-bg.png';
import virtualCardImageBg from '/src/assets/images/virtualCard-bg.png';
import { formatCardNumber } from "../../utils/cardsArray";

export type CardProps = {
  card: TCard;
};

const CardFront = ({ card }: { card: TCard }) => (
  <div
    className={`card-front backface-hidden cursor-pointer rounded-[30px] p-8 z-50 absolute h-full w-full aspect-[1.586] max-w-screen bg-cover bg-no-repeat 
      ${card.status === 'inactive' ? 'grayscale' : ''} 
      ${card.status === 'terminated' ? 'blur-[2px]' : ''}`}
    style={{
      backgroundImage: `url(${card.is_physical ? physicalCardImage : virtualCardImage})`,
      backfaceVisibility: 'hidden',
    }}
  >
    <img className="absolute top-4 right-4 w-[6rem] max-w-[80px]" src={prepaidBankLogo} />
    <div className="card-buttons absolute bottom-4 left-0 w-full ps-8 pe-4 flex items-center justify-between">
      <h6 className={`text-sm tracking-wide font-bold ${card.is_physical ? 'text-white' : 'text-[#222]'} uppercase`}>
        {formatCardNumber(card.last_four)}
      </h6>
      <img className="w-[6rem] max-w-[80px]" src={mastercardLogo} />
    </div>
  </div>
);

const CardBack = ({ card }: { card: TCard }) => (
  <div
    className={`card-back absolute backface-hidden cursor-pointer rounded-[30px] p-8 z-10 aspect-[1.586] max-w-screen w-full h-full inset-0 bg-cover bg-no-repeat 
      ${card.status === 'inactive' ? 'grayscale' : ''} 
      ${card.status === 'terminated' ? 'blur-[2px]' : ''}`}
    style={{
      transform: 'rotateY(180deg)',
      backgroundImage: `url(${card.is_physical ? physicalCardImageBg : virtualCardImageBg})`,
      backfaceVisibility: 'hidden',
    }}
  />
);

const LockIcon = ({ card }: { card: TCard }) => (
  card.status === "terminated" ? (
    <div
      className={`lock-icon w-full h-full absolute inset-0 z-10 flex items-center justify-center 
        ${card.is_physical ? 'text-[#d1cccc]' : 'text-[#605b5b]'}`}
    >
      <svg className="w-[3rem] h-[3rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M12 16.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97626 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97626 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  ) : null
);

export default function Card({ card }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleToggle = () => {
    setIsChecked(prev => !prev)
  };

  return (
    <div className="lg:col-span-4 sm:col-span-6 col-span-12">
      <div className={`card mb-4 relative perspective-[1000px] aspect-[1.586] ${card.status === 'terminated' ? 'pointer-events-none' : ''}`} onClick={handleFlip}>
        <div
          className="card-inner bg-transparent transition-[transform] duration-700 absolute w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <CardFront card={card} />
          <CardBack card={card} />
        </div>
        <LockIcon card={card} />
      </div>
      <div className="flex items-center justify-center w-full">
        {
          card.status === 'terminated' ? null : (
            <div className="flex items-center gap-2">
              <span>show details</span>
              <div className="switch" >
                <label htmlFor="switch" onClick={handleToggle} className={`toggler w-[60px] h-[30px] rounded-full flex items-center cursor-pointer border-2 border-solid border-[#f8f8f8] transition-[background,left] duration-300 ${isChecked ? 'bg-[var(--secondary-color)]' : 'bg-[#222] '}`}>
                  <input checked={isChecked} onChange={handleToggle} type="checkbox" className="appearance-none border-none outline-0 relative w-[24px] h-[24px] bg-red-700 rounded-full left-[2px] top-[50%] transform translate-y-[-50%] z-10 pointer-events-none flex items-center justify-center" name="switch" id="switch" />
                </label>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

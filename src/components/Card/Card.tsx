import { TCard, TStatus } from "../../types";
import { formatCVVNumber, formatCardNumber, formatCardNumberX } from "../../utils/cardsArray";

import SwitchStatus from "../SwitchStatus";
import flipIcon from '/src/assets/images/flip.png'
import goldenBg from '/src/assets/images/gold-texture-wallpaper2.avif'
import i18n from "../../i18n";
import mastercardLogo from '/src/assets/images/mastercardLogo.png';
import physicalCardImage from '/src/assets/images/physicalCard.png';
import physicalCardImageBg from '/src/assets/images/physicalCard-bg.png';
import prepaidBankLogo from '/src/assets/images/prepaidBankLogo.png';
import { useState } from "react";
import virtualCardImage from '/src/assets/images/virtualCard.png';
import virtualCardImageBg from '/src/assets/images/virtualCard-bg.png';

export type CardProps = {
  card: TCard;
};

const statusArray: TStatus[] = [
  'active', 'inactive', 'terminated'
]

const CardFront = ({ card, isChecked }: { card: TCard, isChecked: boolean }) => (
  <div
    className={`card-front flex flex-col justify-between backface-hidden cursor-pointer rounded-[30px] py-4 px-5 z-50 absolute h-full w-full aspect-[1.586] max-w-screen bg-cover bg-no-repeat 
      ${card.status === 'inactive' ? 'grayscale' : ''} 
      ${card.status === 'terminated' ? 'blur-[2px]' : ''}`}
    style={{
      backgroundImage: `url(${card.is_physical ? physicalCardImage : virtualCardImage})`,
      backfaceVisibility: 'hidden',
    }}
    dir={i18n.dir()}
  >
    <img className={`${i18n.dir() === 'ltr' ? 'ms-auto' : 'me-auto'} top-4 right-4 w-[4rem] max-w-[80px]`} src={prepaidBankLogo} />
    <h2 className={`${i18n.dir() === 'ltr' ? 'me-auto pe-11' : 'ms-auto'} mt-8 font-[courierNew] font-bold text-2xl lg:text-lg xl:text-2xl bg-clip-text text-transparent bg-no-repeat box-decoration-clone`} style={{ backgroundImage: `url(${goldenBg})` }}>{card.more_details.name}</h2>
    <div className={`card-buttons bottom-4 left-0 w-full flex items-center justify-between ${i18n.dir() === 'ltr' ? 'flex-row' : ' flex-row-reverse'} p-0`}>
      <h6 className={`text-sm lg:text-[0.75rem] xl:text-sm tracking-wide ${isChecked ? 'tracking-[2px]' : ''} font-semibold ${card.is_physical ? 'text-white' : 'text-[#222]'} uppercase`}>
        {isChecked ? formatCardNumber(card.more_details.full_card_number) : formatCardNumberX(card.last_four)}
      </h6>
      <img className="w-[4rem] max-w-[80px] lg:w-[3rem] xl:w-[4rem] " src={mastercardLogo} />
    </div>
    <img src={flipIcon} className="absolute top-[calc(50%-2rem)] right-[5px] invert-[1] transform translate-y-1/2 w-11 cursor-pointer" />
  </div>
);

const CardBack = ({ card, isChecked }: { card: TCard, isChecked: boolean }) => (
  <div
    className={`card-back flex flex-col justify-between absolute backface-hidden cursor-pointer rounded-[30px] aspect-[1.586] max-w-screen w-full h-full inset-0 bg-cover bg-no-repeat 
      ${card.status === 'inactive' ? 'grayscale' : ''} 
      ${card.status === 'terminated' ? 'blur-[2px]' : ''}`}
    style={{
      transform: 'rotateY(180deg)',
      backgroundImage: `url(${card.is_physical ? physicalCardImageBg : virtualCardImageBg})`,
      backfaceVisibility: 'hidden',
    }}
    dir={i18n.dir()}
  >
    <div className="black w-full h-[20%] mt-8" style={{
      backgroundImage: "linear-gradient(45deg,  #2b2b2b, #1c1c1c 40%, #2b2b2b 70%, #1c1c1c )"
    }}></div>

    <div className={`info flex justify-between items-center py-4 px-5 mt-8 ${i18n.dir() === 'ltr' ? 'flex-row' : 'flex-row-reverse'}`}>
      <h2 className={` ${i18n.dir() === 'ltr' ? 'pe-11' : 'ps-11'} font-[courierNew] font-bold text-lg text-wrap text-center bg-[url('./src/assets/images/gold-texture-wallpaper2.avif')] bg-clip-text text-transparent box-decoration-clone`} style={{ backgroundImage: `url(${goldenBg})` }}>{card.more_details.name}</h2>
      <span className={`cvv uppercase flex items-center gap-2 text-[#222] ${i18n.dir() === 'ltr' ? 'flex-row' : 'flex-row-reverse'}`}>
        <span>cvv</span>
        <span>{isChecked ? card.more_details.cvv_number : formatCVVNumber(card.more_details.cvv_number)}</span>
      </span>
    </div>
  </div >
);

const LockIcon = ({ card }: { card: TCard }) => (
  card.status === "terminated" ? (
    <div
      className={`lock-icon w-full h-full absolute inset-0 z-10 flex items-center justify-center 
        ${card.is_physical ? 'text-[#d1cccc]' : 'text-[#605b5b]'}`}
    >
      <svg className="w-[3rem] h-[3rem] lg:w-[2rem] lg:h-[2rem] xl:w-[3rem] xl:h-[3rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M12 16.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97626 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97626 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  ) : null
);

const ShowDetails = ({ card, handleToggle, isChecked }: { card: TCard, handleToggle: () => void, isChecked: boolean }) => (
  <div className="flex items-center justify-center gap-4 w-full" dir={i18n.dir()}>
    {
      card.status === 'terminated' ? null : (
        <div className="flex items-center gap-2">
          <span className="text-sm">{i18n.t('showDetails')}</span>
          <div className="switch" >
            <label htmlFor="switch" onClick={handleToggle} className={`toggler relative w-[60px] h-[30px] rounded-full flex items-center cursor-pointer border-2 border-solid border-[#f8f8f8] transition-[background,left] duration-300 ${isChecked ? 'bg-[var(--secondary-color)]' : 'bg-[#222] '}`}>
              <input checked={isChecked} onChange={handleToggle} type="checkbox" className={`appearance-none border-none outline-0 relative w-[22px] h-[22px] bg-[var(--secondary-color)] checked:bg-[#222] duration-500  rounded-full top-[0] z-10 pointer-events-none flex items-center justify-center ${i18n.dir() === 'ltr' ? 'left-[2px] checked:left-[calc(50%+2px)]  transition-[background,left]' : 'right-[2px] checked:right-[calc(50%+2px)]  transition-[background,right]'}`} name="switch" id="switch" />
            </label>
          </div>
        </div>
      )
    }
    <SwitchStatus initialStatus={card.status} status={statusArray} id={card.id} />
  </div>
)

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
          <CardFront card={card} isChecked={isChecked} />
          <CardBack card={card} isChecked={isChecked} />
        </div>
        <LockIcon card={card} />
      </div>
      <ShowDetails card={card} handleToggle={handleToggle} isChecked={isChecked} />
    </div>
  );
}

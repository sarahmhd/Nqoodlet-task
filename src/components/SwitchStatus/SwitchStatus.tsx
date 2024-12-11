import { useEffect, useRef, useState } from "react";

import { TStatus } from "../../types";
import i18n from "../../i18n";
import { statusColor } from "../../utils/cardsArray";
import { updateStatus } from "../../store/actions";
import { useDispatch } from "react-redux";

export type SwitchStatusProps = {
  status: TStatus[],
  initialStatus: TStatus,
  id: string
};
export default function SwitchStatus({ status, initialStatus, id }: SwitchStatusProps) {
  const dispatch = useDispatch();


  const [menuVisibility, setMenuVisibility] = useState(false);
  const [activeStatus, setActiveStatus] = useState(initialStatus);

  const ref = useRef<HTMLDivElement | null>(null)

  const toggleMenuVisibility = () => {
    setMenuVisibility(prev => !prev)
  };

  const handleChangeStatus = (newStatus: TStatus) => {
    setActiveStatus(newStatus);
    dispatch(updateStatus(id, newStatus))
    setMenuVisibility(false)
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenuVisibility(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  })

  return (
    <div ref={ref} className="menu flex flex-col gap-3 relative">
      <button onClick={toggleMenuVisibility} className={`toggle bg-transparent font-semibold tracking-[1px] uppercase w-fit min-w-[80px] relative z-10 overflow-hidden text-xs text-[${statusColor(activeStatus)}] flex items-center gap-1 ${i18n.dir() === 'rtl' ? 'flex-row-reverse' : ''} `} style={{
        color: statusColor(activeStatus)
      }}>
        {activeStatus || "Select Status"}
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="currentColor" fill="none">
            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      <ul className={`list bg-[var(--white-color)] w-full min-w-[110px] mt-3 color-[#222] rounded-md transition-all duration-300 overflow-hidden ${!menuVisibility ? 'h-0' : 'min-h-fit'} absolute z-[1045] top-full `}>
        {
          status.map((item) => (
            <li key={item} onClick={() => handleChangeStatus(item)} className="text-sm list-item py-2 px-4 cursor-pointer transition-[background] duration-300 hover:bg-[var(--secondary-color)] " >{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

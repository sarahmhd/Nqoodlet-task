import { useEffect, useRef, useState } from "react";

export type SwitchStatusProps = {
  status: string[]
};
export default function SwitchStatus({ status }: SwitchStatusProps) {

  const [menuVisibility, setMenuVisibility] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null)

  const toggleMenuVisibility = () => {
    setMenuVisibility(prev => !prev)
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
      <button onClick={toggleMenuVisibility} className="toggle bg-transparent border-2 border-solid border-[var(--secondary-color)] rounded-full min-w-[110px] p-2 before:content-[''] before:h-full before:w-0 before:bg-[var(--secondary-color)] before:transition-[width] before:duration-300 relative before:absolute before:inset-0 z-10 overflow-hidden before:-z-10 hover:before:w-full ">All</button>
      <ul className={`list bg-[var(--white-color)] w-full mt-3 color-[#222] rounded-md transition-all duration-300 overflow-hidden ${!menuVisibility ? 'h-0' : 'min-h-fit'} absolute top-full `}>
        {
          status.map((item) => (
            <li key={item} className="list-item py-2 px-4 cursor-pointer transition-[background] duration-300 hover:bg-[var(--secondary-color)] " >{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

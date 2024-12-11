import { TCard, TTabs } from "../../types";
import { useEffect, useState } from "react";

import CardsList from "../CardsList";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function TaskTabs() {
  const [activeTab, setActiveTab] = useState<TTabs>("all");
  const cards = useSelector((state: RootState) => state.value)
  console.log(cards)
  const [filteredCards, setFilteredCards] = useState<TCard[]>(cards)

  const { t, i18n } = useTranslation()
  const dir = i18n.dir()

  const tabs: { name: TTabs, value: string }[] = [
    { name: 'all', value: t('tabs.all') },
    { name: 'active', value: t('tabs.active') },
    { name: 'inactive', value: t('tabs.inactive') },
    { name: 'terminated', value: t('tabs.terminated') },
    { name: 'physical', value: t('tabs.physical') },
    { name: 'digital', value: t('tabs.digital') },
  ]

  const handleTabClick = (tab: TTabs) => {
    setActiveTab(tab);
    filterCards(tab);
  };

  const filterCards = (tab: TTabs) => {
    const newTab = tab === 'physical' ? true : tab === 'digital' ? false : tab
    if (newTab === 'all') {
      setFilteredCards(cards)
    } else {
      setFilteredCards(cards.filter(el => el.status === tab || el.is_physical === newTab))
    }
  };

  useEffect(()=>{
    setFilteredCards(cards)
  },[cards])

  return (
    <div className="tabs-section py-12" dir={dir}>
      <div className="container m-auto">
        <div className="w-full overflow-auto scrollbar">
          <div className="tabs flex items-center gap-1 w-full pb-4 border-b border-solid border-[#e2e6ed]">
          {
            tabs.map(tab => (
              <button key={tab.name} className={`capitalize text-base focus-visible:outline-0 relative py-1 px-4 rounded-full transition-[background,color] duration-300 ${activeTab === tab.name ? 'bg-[var(--primary-color)] text-white' : ''} hover:bg-[var(--primary-color)] hover:text-white`} onClick={() => handleTabClick(tab.name)}>{tab.value}</button>
            ))
          }
          </div>
        </div>
        <ul className="tabs-content mt-8">
          <div>
            <CardsList cards={filteredCards} />
          </div>
        </ul>
      </div>
    </div>
  );
}

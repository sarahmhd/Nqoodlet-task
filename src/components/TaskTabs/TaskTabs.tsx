import { useState } from "react";
import CardsList from "../CardsList";
import { cards } from "../../utils/cardsArray";

const tabs: { name: "task" | "task-addons", value: string }[] = [
  { name: 'task', value: 'task' },
  { name: 'task-addons', value: 'Task + Add-ons' },
]
export default function TaskTabs() {
  const [activeTab, setActiveTab] = useState<"task" | "task-addons">("task");

  const handleTabClick = (tab: "task" | "task-addons") => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-section py-12">
      <div className="container m-auto">
        <div className="tabs flex items-center gap-4 w-full pb-4 border-b border-solid border-[#e2e6ed]">
          {
            tabs.map(tab => (
              <button className={`capitalize text-lg focus-visible:outline-0 relative before:content-[''] before:absolute before:transition-[width] before:duration-300 before:bottom-[-1rem] before:h-[3px] before:rounded-full before:bg-[var(--secondary-color)]  ${activeTab === tab.name ? 'before:w-full': 'before:w-0'} hover:before:w-full`} onClick={() => handleTabClick(tab.name)}>{tab.value}</button>
            ))
          }
        </div>
        <ul className="tabs-content mt-8">
          {activeTab === "task" && (
            <div>
              <CardsList cards={cards} />
            </div>
          )}
          {activeTab === "task-addons" && (
            <div>
              <h1 className="mb-4 text-lg font-bold">Add-ons</h1>
              <CardsList cards={cards} />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

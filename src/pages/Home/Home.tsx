import Header from "../../components/Header"
import TaskTabs from './../../components/TaskTabs/TaskTabs';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] p-2">
      <Header />
      <TaskTabs />
    </div>
  );
}

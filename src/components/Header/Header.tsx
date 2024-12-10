import SwitchStatus from "../SwitchStatus";
import { TStatus } from "../../types";

const activeStatus: TStatus[] = [
  "all",
  "active",
  "inactive",
  "terminated"
]

const physicalStatus: string[] = [
  "all",
  "physical",
  "digital"
]

export default function Header() {
  return (
    <header className="bg-[var(--white-color)] min-h-[70px] p-4 flex items-center justify-between">
      <div className="container m-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="logo">
            <img className="w-[140px]" src="../../../src/assets/images/nqoodlet-logo.svg" />
          </a>
          <div className="btns flex items-center gap-4">
            <SwitchStatus status={activeStatus} />
            <SwitchStatus status={physicalStatus} />
          </div>
        </div>
      </div>
    </header>
  );
}

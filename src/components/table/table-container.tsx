import SearchInput from "@/components/inputs/search-input";
import DesktopTable from "./desktop/desktop-table";
import MobileTable from "./mobile/MobileTable";

export default function TableContainer() {
  return (
    <div className="p-6 flex flex-col justify-start gap-6 sm:h-full w-full bg-neutralBlack">
      <SearchInput />
      <DesktopTable />
      <MobileTable />
    </div>
  );
}

import SearchInput from "@/components/inputs/SearchInput";
import DesktopTable from "./desktop/DesktopTable";
import MobileTable from "./mobile/MobileTable";

export default function TableContainer() {
  return (
    <div className="p-6 flex flex-col justify-center gap-6">
      <SearchInput />
      <DesktopTable />
      <MobileTable />
    </div>
  );
}

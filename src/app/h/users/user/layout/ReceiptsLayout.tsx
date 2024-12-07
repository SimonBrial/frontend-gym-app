export default function ReceiptsLayout() {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-2 px-3 py-3 w-full divide-y divide-slate-700 divide-dotted text-center">
        <div className=" w-full">Title</div>
        <div className=" w-full py-2">Description</div>
      </div>
    </div>
  );
}

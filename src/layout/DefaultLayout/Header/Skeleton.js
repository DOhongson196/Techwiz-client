function Skeleton() {
  return (
    <div className="rounded-md p-3 max-w-sm w-[300px]">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-300 dark:bg-slate-500 h-8 w-8"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="h-2 bg-slate-300 dark:bg-slate-500 rounded"></div>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 dark:bg-slate-500 rounded col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;

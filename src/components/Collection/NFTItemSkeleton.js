function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-[305px] bg-slate-300 dark:bg-slate-500 rounded-xl "></div>
        <div className="space-y-3">
          <div className="h-4 bg-slate-300 dark:bg-slate-500 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-1"></div>
            <div className="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;

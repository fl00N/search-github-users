import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StatCardSkeleton = () => {
  return (
    <Card className="relative overflow-hidden border-border/60 bg-card/80">
      <Skeleton className="absolute inset-x-0 top-0 h-1 rounded-none" />

      <CardContent className="flex items-start justify-between p-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-16" />
          <Skeleton className="h-3 w-28" />
        </div>

        <Skeleton className="size-10 rounded-xl" />
      </CardContent>
    </Card>
  );
};

const ChartSkeleton = ({ className = "" }: { className?: string }) => {
  const bars = ["80%", "65%", "90%", "55%", "72%", "45%"];

  return (
    <Card
      className={`relative overflow-hidden border-border/60 bg-card/80 ${className}`}
    >
      <Skeleton className="absolute inset-x-0 top-0 h-1 rounded-none" />

      <CardHeader className="space-y-3 px-6 pt-7">
        <div className="flex items-center gap-2">
          <Skeleton className="size-2 rounded-full" />
          <Skeleton className="h-3 w-28" />
        </div>

        <Skeleton className="h-6 w-52" />
        <Skeleton className="h-4 w-full max-w-sm" />
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="space-y-5 py-4">
          {bars.map((width, index) => (
            <div
              key={index}
              className="grid grid-cols-[80px_1fr] items-center gap-4 sm:grid-cols-[110px_1fr]"
            >
              <Skeleton className="h-3 w-full" />

              <div className="flex items-center gap-3">
                <Skeleton
                  className="h-6 rounded-r-lg rounded-l-sm"
                  style={{ width }}
                />

                <Skeleton className="h-3 w-5 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex justify-between border-t border-border/50 pt-4">
          <Skeleton className="h-3 w-5" />
          <Skeleton className="h-3 w-5" />
          <Skeleton className="h-3 w-5" />
          <Skeleton className="h-3 w-5" />
          <Skeleton className="h-3 w-5" />
        </div>
      </CardContent>
    </Card>
  );
};

const UserProfileSkeleton = () => {
  return (
    <section
      className="mx-auto w-full max-w-6xl space-y-6"
      role="status"
      aria-label="Loading GitHub profile"
    >
      <Card className="overflow-hidden border-border/60 bg-card/80 shadow-lg shadow-primary/5">
        <Skeleton className="h-28 w-full rounded-none sm:h-36" />

        <CardContent className="relative px-5 pb-6 sm:px-8 sm:pb-8">
          <Skeleton className="-mt-16 size-32 rounded-full border-4 border-background sm:-mt-20 sm:size-40" />

          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="w-full max-w-2xl space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-8 w-48 sm:w-64" />
                <Skeleton className="h-4 w-28" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>

            <Skeleton className="h-10 w-full rounded-xl md:w-44" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
        <ChartSkeleton className="xl:col-span-2" />
      </div>

      <span className="sr-only">Loading profile data...</span>
    </section>
  );
};

export default UserProfileSkeleton;

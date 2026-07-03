import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type StatsCardProps = {
  title: string;
  count: number;
  description: string;
};

const StatsCard = ({ title, count, description }: StatsCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/60 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary to-primary/40 opacity-70 transition-opacity group-hover:opacity-100" />

      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <CardDescription className="font-medium">{title}</CardDescription>

            <CardTitle className="text-3xl font-bold tracking-tight">
              {count.toLocaleString()}
            </CardTitle>

            <p className="text-xs text-muted-foreground">{description}</p>
          </div>

          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <div className="size-3 rounded-full bg-primary shadow-sm shadow-primary/50" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;

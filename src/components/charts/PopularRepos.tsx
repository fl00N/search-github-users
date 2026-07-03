import type { Repository } from "@/types";
import { calculateMostStarredRepos } from "@/utils";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import ChartCard from "./ChartCard";

const chartConfig = {
  stars: {
    label: "Stars",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepos(repositories).slice(0, 6);

  return (
    <ChartCard
      title="Most Starred Repositories"
      description="Repositories receiving the most appreciation from the community."
    >
      {popularRepos.length === 0 ? (
        <div className="flex h-72 items-center justify-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
          No starred repositories available
        </div>
      ) : (
        <ChartContainer config={chartConfig} className="h-80 w-full">
          <BarChart
            accessibilityLayer
            data={popularRepos}
            layout="vertical"
            margin={{
              top: 10,
              right: 42,
              bottom: 10,
              left: 10,
            }}
          >
            <CartesianGrid
              horizontal={false}
              strokeDasharray="4 4"
              stroke="var(--border)"
            />

            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              allowDecimals={false}
              tick={{
                fill: "var(--muted-foreground)",
                fontSize: 12,
              }}
            />

            <YAxis
              dataKey="repo"
              type="category"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              width={110}
              tickFormatter={(value: string) =>
                value.length > 16 ? `${value.slice(0, 16)}…` : value
              }
              tick={{
                fill: "var(--foreground)",
                fontSize: 12,
                fontWeight: 500,
              }}
            />

            <ChartTooltip
              cursor={{
                fill: "var(--muted)",
                opacity: 0.45,
              }}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Bar
              dataKey="stars"
              fill="var(--color-stars)"
              radius={[0, 8, 8, 0]}
              barSize={24}
            >
              <LabelList
                dataKey="stars"
                position="right"
                offset={10}
                fill="var(--foreground)"
                fontSize={12}
                fontWeight={600}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      )}
    </ChartCard>
  );
};

export default PopularRepos;

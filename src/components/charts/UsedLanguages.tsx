import type { Repository } from "@/types";
import { calculatePopularLanguages } from "@/utils";
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
  count: {
    label: "Repositories",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const popularLanguages = calculatePopularLanguages(repositories).slice(0, 6);

  return (
    <ChartCard
      title="Most Used Languages"
      description="Languages found most frequently across public repositories."
    >
      {popularLanguages.length === 0 ? (
        <div className="flex h-72 items-center justify-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
          No language data available
        </div>
      ) : (
        <ChartContainer config={chartConfig} className="h-80 w-full">
          <BarChart
            accessibilityLayer
            data={popularLanguages}
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
              dataKey="language"
              type="category"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              width={90}
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
              dataKey="count"
              fill="var(--color-count)"
              radius={[0, 8, 8, 0]}
              barSize={24}
            >
              <LabelList
                dataKey="count"
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

export default UsedLanguages;

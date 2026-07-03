import type { Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";
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
    label: "Forks",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories).slice(0, 6);

  return (
    <ChartCard
      title="Most Forked Repositories"
      description="Projects most frequently copied and expanded by other developers."
    >
      {mostForkedRepos.length === 0 ? (
        <div className="flex h-72 items-center justify-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
          No forked repositories available
        </div>
      ) : (
        <ChartContainer config={chartConfig} className="h-80 w-full">
          <BarChart
            accessibilityLayer
            data={mostForkedRepos}
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

export default ForkedRepos;

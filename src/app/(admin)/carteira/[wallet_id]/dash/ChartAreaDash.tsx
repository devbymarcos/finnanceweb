// @ts-nocheck
"use client";
// import Chart from "react-apexcharts";
import { currencyFormatUI } from "@/functions/helpers";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A multiple line chart";

const chartConfig = {
  expense: {
    label: "Despesas",
    color: "hsl(var(--chart-1))",
  },
  income: {
    label: "Receitas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ChartAreaDash = ({ dataChart }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-base-secondary">
            Receitas x Despesas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={dataChart}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="due_date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="expense"
                type="monotone"
                stroke="var(--color-expense)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="income"
                type="monotone"
                stroke="var(--color-income)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default ChartAreaDash;

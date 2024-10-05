"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartConfig = {
  income: {
    label: "Receitas",
    color: "hsl(var(--chart-2))",
  },
  expense: {
    label: "Despesas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface ChartPropsType {
  dataChart: {
    due_year: string;
    due_month: string;
    due_date: string;
    income: number;
    expense: number;
  }[];
}

export function ChartAreaDash({ dataChart }: ChartPropsType) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base-secondary">
          Receitas x Despesas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={dataChart}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="months"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
              formatter={(value: any, name) => [
                name == "income" ? "Receita " : "Despesas ",
                new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value),
              ]}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

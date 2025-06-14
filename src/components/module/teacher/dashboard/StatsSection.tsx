import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StatCardData } from "@/type/api/dashboard";
import type { FC } from "react";

export const StatsSection: FC<{ stats: StatCardData[] }> = ({ stats }) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {stats.map((card) => (
      <Card key={card.title}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
          {card.icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{card.value}</div>
        </CardContent>
      </Card>
    ))}
  </div>
);

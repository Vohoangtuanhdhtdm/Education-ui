// components/FeatureCard.tsx
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="w-full sm:w-80 lg:w-[30%] h-64 bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-start hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer">
      <CardHeader>
        <div className="text-blue-700 w-10 h-10">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

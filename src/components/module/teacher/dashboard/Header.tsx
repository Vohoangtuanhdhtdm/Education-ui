import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import type { FC } from "react";

export const DashboardHeader: FC<{ teacherName: string }> = ({
  teacherName,
}) => {
  const formattedDate = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "full",
  }).format(new Date());
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Chào mừng trở lại, {teacherName}!
        </h1>
        <p className="text-muted-foreground">{formattedDate}</p>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/teacher/tools">
          <Button variant="outline">Công cụ cho giáo viên</Button>
        </Link>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" /> Tạo thông báo
        </Button>
      </div>
    </div>
  );
};

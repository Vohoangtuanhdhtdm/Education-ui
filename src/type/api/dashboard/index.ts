export type StatCardData = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

export type UpcomingClassData = {
  time: string;
  className: string;
  subject: string;
  status: "Sắp diễn ra" | "Đang diễn ra";
};

export type Student = {
  name: string;
  avatarUrl?: string;
};

export type RecentActivityData = {
  student: Student;
  action: string;
  target: string;
  time: string;
};

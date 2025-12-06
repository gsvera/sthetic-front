import ScheduleDate from "@/components/WebComponents/ScheduleDate";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex,nofollow",
};

interface CalendarPageProps {
  params: Promise<{ token: string }>;
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { token } = await Promise.resolve(params);

  return <ScheduleDate token={token} />;
}

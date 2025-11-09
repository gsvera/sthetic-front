import ScheduleDate from "@/components/WebComponents/ScheduleDate";

interface CalendarPageProps {
  params: Promise<{ token: string }>;
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { token } = await Promise.resolve(params);

  return <ScheduleDate token={token} />;
}

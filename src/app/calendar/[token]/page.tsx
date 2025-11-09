import ScheduleDate from "@/components/WebComponents/ScheduleDate";

export default async function CalendarPage({
  params,
}: {
  params: { token: string };
}) {
  const { token } = await Promise.resolve(params);

  return <ScheduleDate token={token} />;
}

import { formatDate } from "../../../helper-functions/farmate-date";

export default function DateCell({
  date,
  dateFormat = "MMMM D, YYYY",
  timeFormat = "h:mm A",
}) {
  return (
    <div style={{display: "flex", gap: "2px"}}>
      <time dateTime={formatDate(date, "YYYY-MM-DD")} className={"font-medium text-gray-700"}>
        {formatDate(date, dateFormat)}
      </time>
      <time dateTime={formatDate(date, "HH:mm:ss")} className={"text-[13px] text-gray-500"}>
        {formatDate(date, timeFormat)}
      </time>
    </div>
  );
}

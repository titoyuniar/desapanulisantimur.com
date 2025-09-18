const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function dateFormatPost(param: Date | string | number, useClock = false) {
  const dateParam = !isNaN(param as number) ? param : (param as string);
  const dateObj = new Date(dateParam);
  if (!dateObj) return "-";
  const month = months[dateObj.getMonth()];
  const date = dateObj.getDate();
  const jam = (dateObj.getHours() + "").padStart(2, "0");
  const menit = (dateObj.getMinutes() + "").padStart(2, "0");

  let result = `${date} ${month}`;

  if (useClock) result += ` pukul ${jam}:${menit}`;
  return result;
}

export const MONTHS_OF_YEAR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const curYear = new Date().getFullYear();
export const curMonth = new Date().getMonth();

const prevYearMonths = MONTHS_OF_YEAR.slice(curMonth + 1, 12).map(
  (month) => `${month} ${curYear - 1}`
);
const curYearMonths = MONTHS_OF_YEAR.slice(0, curMonth + 1).map(
  (month) => `${month} ${curYear}`
);

export const trailingTwelveMonths = prevYearMonths.concat(curYearMonths);

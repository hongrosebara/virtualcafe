export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const formattedDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
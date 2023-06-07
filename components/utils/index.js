export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const formattedDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

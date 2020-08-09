export const fetchAllData = () => {
  return fetch("/itemsAndCompanies").then((res) => res.json());
};

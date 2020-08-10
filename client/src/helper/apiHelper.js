export const fetchAllData = () => {
  return fetch("/itemsAndCompanies").then((res) => res.json());
};

export const fetchCompanyData = () => {
  return fetch("/company/:companyId").then((res) => res.json());
};

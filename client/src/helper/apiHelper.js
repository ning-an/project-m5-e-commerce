export const fetchAllData = () => {
  return fetch("/itemsAndCompanies").then((res) => res.json());
};

export const fetchCompanyData = () => {
  return fetch("/company/:companyId").then((res) => res.json());
};

export const postPurchaseData = (data) => {
  return fetch("/updateInventoryFromPurchase", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.text());
};

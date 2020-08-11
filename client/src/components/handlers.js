export const get15RandomItems = (items) => {
  const randomItems = [];
  const randomNums = [];
  const total = items.length;
  let randomNumInItems = Math.floor(Math.random() * total);

  while (randomItems.length < 15) {
    while (randomNums.includes(randomNumInItems)) {
      randomNumInItems = Math.floor(Math.random() * total);
    }
    randomNums.push(randomNumInItems);
    randomItems.push(items[randomNumInItems]);
  }

  return randomItems;
};

export const groupItemsByKey = (items, key) => {
  return items.reduce((acc, cur) => {
    acc[cur[key]] = acc[cur[key]] || [];
    acc[cur[key]].push(cur);
    return acc;
  }, {});
};

import { useState } from 'react';

const asc = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }

  return 0;
};

const desc = (a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }

  return 0;
};

const sortFuncs = {
  ASC: asc,
  DESC: desc,
};

export function useSort(arr) {
  const [sortedList, setSortedList] = useState(arr);

  const sort = (order) => {
    const newList = sortedList.sort((a, b) =>
      sortFuncs[order](a.created, b.created)
    );

    setSortedList([...newList]);
  };

  return { sortedList, sort };
}

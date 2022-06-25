const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(object, sorting) {
  const objArray = [];

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      objArray.push({ key, value });
    }
  }

  return objArray.sort((a, b) => {
    if (sorting.includes(a.key) && !sorting.includes(b.key)) {
      return -1;
    }
    if (sorting.includes(b.key) && !sorting.includes(a.key)) {
      return 1;
    }
    if (sorting.includes(a.key) && sorting.includes(b.key)) {
      return sorting.indexOf(a.key) - sorting.indexOf(b.key);
    }
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });
}

orderByProps(obj, ['name', 'level']);

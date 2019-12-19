export const sortTableNumbers = (data, order, field) => {
  const splitField = field.split(".");
  const stringField = field;
  if (splitField.length > 1) {
    field = splitField;
  }

  if (order === null) order = 1;
  const sort = order ? 1 : -1;
  data.sort((a, b) => {
    // хак чтобы можно было строкой поле в объекте указать, правда только 2 уровня 'field.field' :)
    const aField = Array.isArray(field) ? a[field[0]][field[1]] : a[field];
    const bField = Array.isArray(field) ? b[field[0]][field[1]] : b[field];

    console.log(typeof aField, typeof bField);

    // if (typeof aField !== "number" || typeof bField !== "number") return 0;
    return aField >= bField ? 1 * sort : -1 * sort;
  });
  return {
    orderField: stringField,
    order: !order,
    data: data
  };
};

export const sortTableStrings = (data, order, field) => {
  data.sort(function(a, b) {
    if (order) {
      return a[field].localeCompare(b[field]);
    } else {
      return b[field].localeCompare(a[field]);
    }
  });
  return {
    orderField: field,
    order: !order,
    data: data
  };
};

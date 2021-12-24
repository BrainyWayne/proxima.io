/**
 *
 * @param query Search query: text | number | date
 * @param list list of items to search through
 * @returns filtered list of items based on query
 */
function search(query: "text" | "number" | "date", list: any[]) {
  return list.slice().filter((result) => {
    result.toString().toLowerCase().trim().includes(query.toLowerCase().trim());
  });
}

/**
 *
 * @param order order of sort
 * @param list list of items to sort
 * @param property property of list to sort
 * @returns a sorted list of items
 */
function sort(order: "asc" | "desc", list: any[], property?: string) {
  //Sort whole list
  if (!property) {
    return list.sort(function (a, b) {
      if (order == "desc") return b - a;
      return a - b;
    });
  }

  //sort by property
  return list.sort(function (a, b) {
    if (order == "desc") return b.property - a.property;
    return a.property - b.property;
  });
}

module.exports.search = search;
module.exports.sort = sort;

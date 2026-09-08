function formatQuery(searchParams) {
  let query = "";
  query += `sort=${searchParams?.sort ?? JSON.stringify({ createdAt: -1 })}`;
  if (searchParams?.name) query += `&name=${name}`;
  if (searchParams?.brands) query += `&brand=${brands}`;
  if (searchParams?.category) query += `&category=${category}`;
  if (searchParams?.min) query += `&min=${min}`;
  if (searchParams?.max) query += `&max=${max}`;
  return query;
}
export default formatQuery;

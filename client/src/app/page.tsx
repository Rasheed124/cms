async function loader() {
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);

  // fetch data
  const response = await fetch(url.href);
  const data = await response.json();
  return { ...data.data };
}
export default async function HomeRoute() {
  const data = await loader();
  console.log(data);
  
  return (
    <>
      <div>
        <h1>{data.Title}</h1>
        <p>{data.Description}</p>
      </div>
    </>
  );
}

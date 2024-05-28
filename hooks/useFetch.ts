export const useFetchPost = async (url: string, datos: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
    
  });
  const data = await response.json();
  console.log(data);
};

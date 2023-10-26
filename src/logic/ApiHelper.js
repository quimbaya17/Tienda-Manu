export async function fetchApi(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ErrorfetchApi" + error.message());
  }
}


export async function fetchGet(endpoint, options = {}) {
  return await fetchApi(endpoint, options);
}

export async function fetchPost(endpoint, data, typeMethod) {
  const options = {
    method: typeMethod,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return await fetchApi(endpoint, options);
}

export async function fetchPut(endpoint, data) {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return await fetchApi(endpoint, options);
}


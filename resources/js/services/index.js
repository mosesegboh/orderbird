async function wrapper(response) {
  const result = await response.json();
  return result
}

export async function getUsers() {
  const response = await fetch('/users',{
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
  const result = await response.json();
  return result
}
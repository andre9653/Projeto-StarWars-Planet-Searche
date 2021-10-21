const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function requestApi() {
  const request = await fetch(URL);
  const response = await request.json();
  return response;
}

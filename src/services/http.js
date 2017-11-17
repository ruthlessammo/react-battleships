// const baseURL = 'zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod';

function request(baseURL) {
  return fetch(baseURL, {
    method: 'GET'
  }).then(checkStatus)
    .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}
const http = { request };
export default http;

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  fetch(endPoint, options = {}) {
    return fetch(`${this.baseURL}${endPoint}`, {
      ...options,
    });
  }
}

export const httpClient = new HttpClient("https://swapi.dev/api/");

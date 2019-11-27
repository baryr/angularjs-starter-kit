export default class ApiService {

  /* @ngInject */
  constructor(apiBase, $http) {
    this.apiBase = apiBase;
    this.$http = $http;
  }

  get(endpoint, cache) {
    return this.$http
      .get(`${this.apiBase}${endpoint}`, {
        cache: cache
      })
      .then(response => response.data);
  }

}

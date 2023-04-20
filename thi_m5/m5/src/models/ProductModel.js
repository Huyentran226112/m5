import axios from "axios";

class ProductModel {
  constructor() {
    this.api_url = "https://642f6d7eb289b1dec4b2c047.mockapi.io/api/products";
  }
  getAll() {
    return new Promise((resolve, reject) => {
      axios
        .get(this.api_url)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  find(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.api_url + "/" + id)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  store(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(this.api_url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  update(id, data) {
    return new Promise((resolve, reject) => {
      axios
        .put(this.api_url + "/" + id, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(this.api_url + "/" + id)
        .then((res) => {
          
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default new ProductModel();
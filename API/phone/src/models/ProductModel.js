import axios from "axios";

class ProductModel {
    constructor(){
        this.api_url = 'http://shoping.test/';
    }
    getAll(){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url + '?action=index')
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    find(id){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url + '?action=show&id='+id)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    store(data){
        return new Promise( (resolve, reject) => {
            axios
            .post(this.api_url + '?action=store',data )
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    
    update(id,data){
        return new Promise( (resolve, reject) => {
            axios
            .post(this.api_url + '?action=update&id='+id, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    delete(id){
        return new Promise( (resolve, reject) => {
            axios
            .delete(this.api_url+'/'+id)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
}
export default new ProductModel();
import axios from "axios";

class UserModel {
    constructor(){
        this.api_url = 'https://642f6d7eb289b1dec4b2c047.mockapi.io/api/users';
    }
    getAll(){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url)
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
            .get(this.api_url+'/'+id)
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
            .post(this.api_url,data )
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    update(data,id){
        return new Promise( (resolve, reject) => {
            axios
            .put(this.api_url+'/'+id,data )
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
export default new UserModel();
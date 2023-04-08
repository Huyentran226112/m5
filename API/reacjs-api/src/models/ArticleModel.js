import axios from "axios";

class ArticleModel {
    constructor(){
        this.api_url = 'https://6083df209b2bed00170404a0.mockapi.io/angular/Article/';
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
}
export default new ArticleModel();
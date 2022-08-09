import { makeAutoObservable } from "mobx";
import apiConstants from "./constants/api"

class Store {
    showreel = [];

    constructor(){
        makeAutoObservable(this)
    }

    fetchShowreel(type:string){
        fetch(`${apiConstants.TYPES_URL}${type}`)
            .then((resp) => resp.json())
            .then((parsedResponse) => {
                store.showreel = parsedResponse
                console.log(store.showreel)
            });
    }
}


const store = new Store();
export default store;
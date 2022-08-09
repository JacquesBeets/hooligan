import { computed, makeAutoObservable, observable } from "mobx";
import apiConstants from "./constants/api"

class Store {
    showreel:any = [];

    constructor(){
        makeAutoObservable(this,{
            showreel: observable,
            featuredHero: computed
        })
    }

    get featuredHero(){
        if(this.showreel.length === 0) return false
        return this.showreel[0].children.find((item:any) => item.featured == true)
    }

    fetchShowreel(type:string){
        fetch(`${apiConstants.TYPES_URL}${type}`)
            .then((resp) => resp.json())
            .then((parsedResponse) => {
                store.showreel = parsedResponse
                console.log(this.featuredHero)
            });
    }
}


const store = new Store();
export default store;
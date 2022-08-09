import { computed, makeAutoObservable, observable } from "mobx";
import apiConstants from "./constants/api"

class Store {
    showreel:any = [];
    isFetchingData:boolean = false

    constructor(){
        makeAutoObservable(this,{
            showreel: observable,
            featuredHero: computed
        })
    }

    get featuredHero(){
        if(this.showreel.length === 0) return false
        return this.showreel[0].children.find((item:any) => item.featured === true)
    }

    fetchShowreel(type:string){
        if(this.isFetchingData) return
        this.isFetchingData = true
        fetch(`${apiConstants.TYPES_URL}${type}`)
            .then((resp) => resp.json())
            .then((parsedResponse) => {
                store.showreel = parsedResponse
                this.isFetchingData = false
                console.log(parsedResponse)
            })
            .catch(error => {
                this.isFetchingData = false
                console.error(error)
            })
    }
}


const store = new Store();
export default store;
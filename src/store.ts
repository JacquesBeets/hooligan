import { computed, makeAutoObservable, observable } from "mobx";
import apiConstants from "./constants/api"

class Store {
    showreel:any = [];
    isFetchingData:boolean = false
    selectedCollection:object = {}

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
        if(this.isFetchingData) return false
        this.isFetchingData = true
        return fetch(`${apiConstants.TYPES_URL}${type}`)
            .then((resp) => resp.json())
            .then((parsedResponse) => {
                store.showreel = parsedResponse
                this.isFetchingData = false
                console.log(parsedResponse)
                return parsedResponse
            })
            .catch(error => {
                this.isFetchingData = false
                console.error(error)
                return false
            })
    }

    fetchItemByGuid(guid:string){
        if(this.isFetchingData) return false
        this.isFetchingData = true
        return fetch(`${apiConstants.ITEM_GUID_URL}${guid}`)
            .then((resp) => resp.json())
            .then((parsedResponse) => {
                store.showreel = parsedResponse
                this.isFetchingData = false
                console.log("fetchItemByGuid: ",parsedResponse)
                return parsedResponse
            })
            .catch(error => {
                this.isFetchingData = false
                console.error(error)
                return false
            })
    }
}


const store = new Store();
export default store;
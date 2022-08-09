import { makeAutoObservable } from "mobx";
import apiConstants from "../constants/api"

class Store {
    showreel:any = [];

    constructor(){
        makeAutoObservable(this)
    }
}


const store = new Store();
export default store;
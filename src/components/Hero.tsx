import React from "react";
import store from '../store';
import apiContstants from '../constants/api'

interface IProps {

}

interface IState {
    featuredBanner:object
}

export default class HeroBanner extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            featuredBanner: {}
        }
    }

    async componentDidMount() {
        // this.setState({
        //     featuredBanner: store.showreel[0].children.find((elem:any) => elem.featured)
        // })
        console.log(store.showreel)
        console.log(this.state.featuredBanner)
    }
    
    render() {        
        return (
            <div className="heroBanner">
                <h1>HERO</h1>
            </div>
        )
    }
}
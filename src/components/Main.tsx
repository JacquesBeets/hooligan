import React from 'react';
import HeroBanner from './Hero'
import Loader from './Loading'
import store from '../store';
import apiContstants from '../constants/api'

interface IProps {
}

interface IState {
    isLoading?: boolean;
}

export default class Main extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            await store.fetchShowreel(apiContstants.types.COLLECTION)
            this.setState({
                isLoading: false
            })
        } catch (error) {
            this.setState({
                isLoading: false
            })
            console.error(error)
        }
    }
    
    render() {
        if(this.state.isLoading){
            return (
                <Loader/> 
            )
        } else {
            return (
                <div className="main">
                    <HeroBanner/>
                    <h1>My Collections</h1>
                </div>
            )
        }       
    }
}


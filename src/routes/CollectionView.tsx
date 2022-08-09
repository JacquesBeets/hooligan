import React, { Component, ReactComponentElement } from 'react';
import { useParams } from 'react-router-dom'
import store from '../store';
import { observer } from "mobx-react";
import apiContstants from '../constants/api'
import Loader from '../components/Loading'
import MovieView from '../components/MovieView'

interface IProps {
    params:any;
}
interface IState {
    isLoading?: boolean;
    collectionItem: any;
}

// Higher Order function to extract id from url
function withRouter(Component:any) {
    function ComponentWithRouter(props:any) {
      let params = useParams()
      return <Component {...props} params={params} />
    }
    return ComponentWithRouter
}

const CollectionView = observer(
    class CollectionViewClass extends React.Component<IProps,IState>{
        constructor(props:IProps) {
            super(props);
            this.state = {
                isLoading: true,
                collectionItem:false
            };
        }
    
        async componentDidMount() {
            try {
                const { id } = this.props.params
                let item = await store.fetchItemByGuid(id)
                this.setState({
                    isLoading: false,
                    collectionItem: item
                })
            } catch (error) {
                this.setState({
                    isLoading: false
                })
                console.error(error)
            }
        }

        returnComponentByType(type:string){
            switch (type) {
                case apiContstants.types.MOVIE:
                    return (<MovieView collectionItem={this.state.collectionItem}/>)
                    break;
                case apiContstants.types.EPISODES:
                    return false // TODO: Episodes Component
                    break;
                case apiContstants.types.SERIES:
                    return false // TODO: Series Component
                    break;
                default:
                    break;
            }
        }
    
        render() {       
            if(this.state.isLoading){
                return (
                    <Loader/> 
                )
            } else {
                return (
                    <div className="collectionView">
                        {this.returnComponentByType(this.state.collectionItem.type)}
                    </div>
                )
            } 
        }
    }
)

export default withRouter(CollectionView);
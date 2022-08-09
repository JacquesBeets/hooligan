import React from "react";
import store from '../store';
import CollectionsRow from "./CollectionRow";
import apiContstants from '../constants/api'
import { observer } from "mobx-react";


const Collections = observer(
    class MyCollections extends React.Component{
    
        render() {        
            let banner = store.featuredHero ? store.featuredHero.metadata.images.find((image:any) => image.type === 'background') : false
            let heroData = store.featuredHero ? store.featuredHero : false
            return (
                <div className="collectionsContainer">
                    {
                        store.showreel.map((collection:any) => {
                            return (
                                <div className="collection" key={collection.guid}>
                                    <h2 className="collectionTitle">{collection.name}</h2>
                                    <CollectionsRow collectionCildren={collection.children}/>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
)

export default Collections;
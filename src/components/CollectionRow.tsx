import React from "react";
import store from '../store';
import CollectionCard from "./CollectionCard";
import { observer } from "mobx-react";

interface IProps {
    collectionCildren: any
}

const CollectionsRow = observer(
    class MyCollectionsRow extends React.Component<IProps>{
        constructor(props:IProps) {
            super(props);
        }

        render() {        
            let banner = store.featuredHero ? store.featuredHero.metadata.images.find((image:any) => image.type === 'background') : false
            let children = this.props.collectionCildren

            return (
                <div className="collectionRow">
                    {
                        children.map((child:any) => {
                            return (
                                <CollectionCard childCard={child} key={child.guid}/>
                            )
                        })
                    }
                </div>
            )
        }
    }
)

export default CollectionsRow;
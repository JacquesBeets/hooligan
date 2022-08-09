import React from 'react';
import store from '../store';
import { observer } from "mobx-react";

const CollectionView = observer(
    class CollectionViewClass extends React.Component{

        render() {        

            return (
                <div className="collectionView" >
                    <h1>COLLECTION VIEW</h1>
                </div>
            )
        }
    }
)

export default CollectionView;
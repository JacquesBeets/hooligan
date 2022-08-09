import React from "react";
import { observer } from "mobx-react";

interface IProps {
    childCard: any
}

const CollectionCard = observer(
    class MyCollectionCard extends React.Component<IProps>{
        duration(timeInSeconds:number){
            let minutes = timeInSeconds/60
            return minutes.toFixed()
        }

        render() {        
            let childCard = this.props.childCard
            let poster = childCard.metadata.images.find((image:any) => image.type === 'poster') 
            return (
                <div className="card">
                    <img src={poster.url} alt="Poster" loading="lazy"/>
                    <div className="title">{childCard.name}</div>
                    <small>{childCard.year} {childCard.duration ?<span>- {this.duration(childCard.duration)}min</span>:false}</small>
                </div>
            )
        }
    }
)

export default CollectionCard;
import React from "react";
import store from '../store';
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

interface IProps {
    collectionItem:any;
}

const MovieView = observer(
    class MovieViewClass extends React.Component<IProps>{

        render() { 
            let movie = this.props.collectionItem
            console.log("movie",movie)       
            // let banner = store.featuredHero ? store.featuredHero.metadata.images.find((image:any) => image.type === 'background') : false
            // let heroData = store.featuredHero ? store.featuredHero : false
            return (
                <h1>MOVIE</h1>
                // <div className="heroBanner" style={{backgroundImage:`url(${banner.url})`}}>
                //     <div className="bannerInfo">
                //         <div className="text">
                //             <h1 className="name">{heroData.name} <small>({heroData.year})</small></h1>
                //             <p className="description">{heroData.description}</p>
                //             <small className="genres">
                //                 {heroData ?
                //                     heroData.genre.map((genre:any)=>{
                //                         return (
                //                             <span key={genre}>{genre} </span>
                //                         )
                //                     })
                //                     :false
                //                 }
                //             </small>
                //         </div>
                //         <div className="actionContainer">
                //             <Link to={`/collectionview/${heroData.guid}`}>
                //                 <button className="btn action">Watch Now</button>
                //             </Link>
                //         </div>
                //     </div>
                // </div>
            )
        }
    }
)

export default MovieView;
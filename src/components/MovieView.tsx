import React from "react";
import store from "../store";
import { observer } from "mobx-react";
import apiContants from "../constants/api"

interface IProps {
    collectionItem:any;
}

const MovieView = observer(
    class MovieViewClass extends React.Component<IProps>{

        render() { 
            let movie = this.props.collectionItem
            console.log("movie",movie)       
            let banner = movie ? movie.metadata.images.find((image:any) => image.type === 'background') : false
            let videoUrl = `${apiContants.OBJECT_KEY_PREFIX}${movie.objectKey}`
            return (
                <div className="heroBanner" style={{backgroundImage:`url(${banner.url})`}}>
                    <div className="video">
                        <video>
                            <source src={videoUrl} type="application/x-mpegURL"></source>
                        </video>
                    </div>
                    <div className="bannerInfo">
                        <div className="text">
                            <h1 className="name">{movie.name} <small>({movie.year})</small></h1>
                            <p className="description">{movie.description}</p>
                            <small className="genres">
                                {movie ?
                                    movie.genre.map((genre:any)=>{
                                        return (
                                            <span key={genre}>{genre} </span>
                                        )
                                    })
                                    :false
                                }
                            </small>
                        </div>
                        {/* <div className="actionContainer">
                            <Link to={`/collectionview/${movie.guid}`}>
                                <button className="btn action">Watch Now</button>
                            </Link>
                        </div> */}
                    </div>

                </div>
            )
        }
    }
)

export default MovieView;
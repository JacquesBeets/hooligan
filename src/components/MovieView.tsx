import React from "react";
import { observer } from "mobx-react";
import apiContants from "../constants/api";
import VideoPlayer from "../components/Video"

interface IProps {
    collectionItem:any;
}

const MovieView = observer(
    class MovieViewClass extends React.Component<IProps>{

        render() { 
            let movie = this.props.collectionItem   
            let banner = movie ? movie.metadata.images.find((image:any) => image.type === 'background') : false
            let videoUrl = `${apiContants.OBJECT_KEY_PREFIX}${movie.objectKey}`
            const videoJsOptions = {
                // autoplay: true,
                controls: true,
                sources: [{
                  src: videoUrl,
                  type: "application/x-mpegURL"
                }]
              }
              console.log("videoJsOptions: ",videoJsOptions)
            return (
                <div className="heroBanner" style={{backgroundImage:`url(${banner.url})`}}>
                    <div className="video">
                         <VideoPlayer {...videoJsOptions} />
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
                    </div>

                </div>
            )
        }
    }
)

export default MovieView;
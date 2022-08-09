import React from "react";
import store from '../store';
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

const Hero = observer(
    class HeroBanner extends React.Component{

        render() {        
            let banner = store.featuredHero ? store.featuredHero.metadata.images.find((image:any) => image.type === 'background') : false
            let heroData = store.featuredHero ? store.featuredHero : false
            return (
                <div className="heroBanner" style={{backgroundImage:`url(${banner.url})`}}>
                    <div className="bannerInfo">
                        <div className="text">
                            <h1 className="name">{heroData.name} <small>({heroData.year})</small></h1>
                            <p className="description">{heroData.description}</p>
                            <small className="genres">
                                {heroData ?
                                    heroData.genre.map((genre:any)=>{
                                        return (
                                            <span key={genre}>{genre} </span>
                                        )
                                    })
                                    :false
                                }
                            </small>
                        </div>
                        <div className="actionContainer">
                            <Link to="/collectionview">
                                <button className="btn action">Watch Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
)

export default Hero;
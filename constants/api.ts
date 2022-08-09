export default {
    types:{
        COLLECTION: "collection",
        MOVIE: "movie",
        SERIES: "series",
        EPISODES: "episode",
    },
    genres:{
        ACTION: "action",
        ADVENTURE: "adventure",
        ANIMATION: "animation"
    },
    OBJECT_KEY_PREFIX: "https://d1chb2avsvwxer.cloudfront.net/",
    TYPES_URL: "https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/",
    ITEM_GUID_URL: "https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/",
    RETURN_GENRE_URL(genre:string){
        if(genre){
            return `https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/genre?genres[]=${genre}&genres[]=${genre}`
        }
        return false 
    }
}
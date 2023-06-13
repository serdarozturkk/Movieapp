import {Movie} from "./movies";
export class Movierepo{
    private movies: Movie[];
    constructor(){
        this.movies=[
            { id:1 , title:"Blackwidow" , description:"fim1 açıklama", imgurl:"../../assets/karadul.jpg" , ispopular:true},
            { id:2 , title:"İronman" , description:"fim2 açıklama", imgurl:"../../assets/ironman.png",ispopular:false},
            { id:3 , title:"Thor" , description:"fim3 açıklama", imgurl:"../../assets/thor.jpg",ispopular:false},
            { id:4 , title:"Captain America" , description:"fim4 açıklama", imgurl:"../../assets/captain-america.webp",ispopular:true}]
    }
    getMovies():Movie[]{
        return this.movies;
    };
    getMovieById(id:number):Movie | undefined{
        return this.movies.find(i=>i.id==id);
    }
    getPopularMovie():Movie[]{
        return this.movies.filter(i=>i.ispopular)
    }
    
}
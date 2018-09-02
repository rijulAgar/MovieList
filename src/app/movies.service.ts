import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  returnMovieData(){
    // const data = [{"movie_title":"Avatar ","director_name":"James Cameron","actor_1_name":"CCH Pounder","actor_2_name":"Joel David Moore","genres":"Action|Adventure|Fantasy|Sci-Fi","language":"English","country":"USA","content_rating":"PG-13","budget":"237000000","title_year":"2009","plot_keywords":"avatar|future|marine|native|paraplegic","movie_imdb_link":"http://www.imdb.com/title/tt0499549/?ref_=fn_tt_tt_1"},{"movie_title":"Pirates of the Caribbean: At World's End ","director_name":"Gore Verbinski","actor_1_name":"Johnny Depp","actor_2_name":"Orlando Bloom","genres":"Action|Adventure|Fantasy","language":"English","country":"USA","content_rating":"PG-13","budget":"300000000","title_year":"2007","plot_keywords":"goddess|marriage ceremony|marriage proposal|pirate|singapore","movie_imdb_link":"http://www.imdb.com/title/tt0449088/?ref_=fn_tt_tt_1"}];
    const data='sdsa';  
    return data;
  }
}

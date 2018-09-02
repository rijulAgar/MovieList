import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MovieGlobal } from '../movie-global';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers:[MovieGlobal]
})
export class MovieListComponent implements OnInit {

  data;
  searchBy:any;
  searchVal:any;
  filterval:any;
  key='movie_title';
  year = Array(50).fill(0).map((x,i)=>2018-i);
  genreArr = ['Action','Adventure','Fantasy','Sci-Fi','Comedy'];
  sortByArr=[
    {value:'movie_title',option:'Movie Name'},
    {value:'title_year',option:'Year'},
    // {value:'',option:''},
    // {value:'',option:''}
  ];
  sortby='movie_title';
  sortOrder=false;
  constructor(private movieGlobal:MovieGlobal) { }

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList(){
    console.log(this.movieGlobal.data);
    this.data=this.movieGlobal.data;
  }

  setFilter(toSetKey,val){
      if(toSetKey){
        this.key=toSetKey;
      }
      if(val){
        this.filterval=val;
      }
  }
  reset(){
    this.filterval='';
    this.searchVal='';
  }
}

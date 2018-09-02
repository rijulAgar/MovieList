import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';

const routes: Routes=[{
  path:'',redirectTo:'/list',pathMatch:'full'
},{
  path:'list',component:MovieListComponent
}]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }

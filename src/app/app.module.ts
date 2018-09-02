import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { MovieGlobal } from './movie-global';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatAutocompleteModule,MatInputModule,MatMenuModule,MatIconModule,MatSelectModule,MatOptionModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchPipe,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,MatInputModule,MatMenuModule,MatIconModule,MatSelectModule,MatOptionModule
  ],
  providers: [MovieGlobal],
  bootstrap: [AppComponent]
})
export class AppModule { }

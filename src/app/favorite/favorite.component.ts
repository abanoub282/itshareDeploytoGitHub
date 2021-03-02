import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

//  @Input('isfavorite') isSelected: boolean =true;

//  @Output('change') change = new EventEmitter();
//   onFavoriteClick(){

//     this.isSelected = !this.isSelected;
//     // console.log(this.isfavorite);
//     this.change.emit(); // Fire
//   }

isfavorite : boolean =false;

 onFavoriteClick(){
   this.isfavorite = !this.isfavorite;
 }
}

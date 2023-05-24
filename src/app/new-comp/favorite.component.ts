import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isfavorite') isSelected:any;
  @Output() change = new EventEmitter();
  
  // isFavorite: boolean = false;
  constructor() {  }
  
  ngOnInit() {
    // throw new Error('Method not implemented.');
    console.log(this.isSelected)
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
  }
}
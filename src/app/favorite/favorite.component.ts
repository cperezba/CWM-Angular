import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input("isFavorite") isFavorite:any;
  @Output('change') change = new EventEmitter;

  toggleFilled() {
    this.isFavorite = !this.isFavorite;  //When a logical '!' sign is used in front a boolean, it toggles between 'true' and 'false'
    this.change.emit(this.isFavorite);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

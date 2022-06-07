import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite = true;

  toggleFilled() {
    this.isFavorite = !this.isFavorite;  //When a logical '!' sign is used in front a boolean, it toggles between 'true' and 'false'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

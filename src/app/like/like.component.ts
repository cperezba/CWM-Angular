import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likesCount:any;
  @Input() isActive:any;
 
  toggleLike() {
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? -1 : 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

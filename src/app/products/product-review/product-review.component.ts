import { Component, OnInit } from '@angular/core';
import { User } from './../shared/models/user.model';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  user: User;

  constructor() { }

  saveComment(){
    console.log('saving...')
  }

  ngOnInit() {
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductReview } from '../shared/models/product-review.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @ViewChild('f') reviewForm: NgForm;
  user: ProductReview;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  saveComment(){
    console.log(this.reviewForm.value);
  }

  ngOnInit() {
  }

}

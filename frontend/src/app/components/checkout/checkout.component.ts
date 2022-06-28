import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  data:any;

  constructor(private router:Router) {
    this.data = this.router.getCurrentNavigation()
    console.log(this.router.getCurrentNavigation())
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}

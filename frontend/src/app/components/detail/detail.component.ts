import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:any
  product:any;

  constructor(
    private productService:ProductService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    //     console.log(this.id);
    this.route.queryParams.subscribe((queryParams)=>{
      console.log(queryParams)
      this.id = queryParams.id;
      console.log(this.id)
    })
    this.productService.getProductById(this.id).subscribe((res)=>{
      console.log(res)
      this.product = res
    })
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
  }

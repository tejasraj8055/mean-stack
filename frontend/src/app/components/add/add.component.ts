import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name:any
  cost:any
  info:any
  image:any

  constructor(
    private productService:ProductService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const product = {
      name:this.name,
      cost:this.cost,
      info:this.info,
      image:this.image
    }
    this.productService.createProduct(product).subscribe(
      (res)=>{
        console.log(res)
        this.name=''
        this.cost=''
        this.info=''
        this.image=''
      }
    )

  }

}

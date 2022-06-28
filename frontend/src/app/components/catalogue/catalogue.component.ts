import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

   cart : any= []
   product:any = [];

  constructor(private productService:ProductService,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((res)=>{
      console.log(res)
      this.product = res;
    })
  }

     checkUser() : boolean{
    if(localStorage.getItem('token')==undefined ||
    localStorage.getItem('token')==null ||
    localStorage.getItem('token')===''){
      alert('Kindly login with email and password credentials')
      this.router.navigate(['/'])
      return false
    }
    else {
      return true
    }
  }

  getIndividualProduct(id:any){
     const checkUser = this.checkUser()
    console.log(checkUser)
    if(checkUser === true){
      console.log(id)
    // this.authService.authenticate().subscribe((res)=>{
    //   console.log(res)
    // })
    this.router.navigate(['/detail'],
    { queryParams: { id:id } }
  );

    }
  }

  addCart(name:any){
    const checkUser = this.checkUser()
    if(checkUser===true){
      console.log(name)
        this.cart.push(name)
        console.log(this.cart.length)
        console.log(this.cart)
    }
  }

  checkout(){
    console.log(this.cart)
    if(this.cart.length==0){
      alert('Please add items in cart')
    }
    else{
      alert("You have choosen " + this.cart.length + " items")
    }
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}

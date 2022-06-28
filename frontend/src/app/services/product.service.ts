import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProductUrl:string='http://localhost:5000/product'
  createProductUrl:string='http://localhost:5000/product'
  getProductByIdUrl:string='http://localhost:5000/product/'

  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get(this.getAllProductUrl )
  }

  getProductById(id:any){
    return this.http.get(this.getProductByIdUrl+id)
  }

  createProduct(product:any){
    return this.http.post(this.createProductUrl, product)
  }
}

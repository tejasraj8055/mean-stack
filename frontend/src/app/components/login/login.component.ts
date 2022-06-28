import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password:string = '';
  loginUser:any;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.email == undefined || this.password == undefined ||
      this.email == '' || this.password == ''){
      alert("Kindly fill all the fields")
    }
    else{
      const user= {
        email: this.email,
         password : this.password
       }
       this.authService.login(user).subscribe((res)=>{
         console.log(res)
         this.loginUser = res
          if(this.loginUser.success == false){
            alert("Invalid credentials")
          }
          else if(this.loginUser.success == true && this.loginUser.data.role==='user'){
            console.log("Successful login")
            localStorage.setItem('name',this.loginUser.data.name)
            localStorage.setItem('token',this.loginUser.token)
            localStorage.setItem('role',this.loginUser.data.role)
            localStorage.setItem('id',this.loginUser.data.id)
            this.router.navigate(['/catalogue'])
          }
          else if(this.loginUser.success == true && this.loginUser.data.role==='admin'){
            localStorage.setItem('name',this.loginUser.data.name)
            localStorage.setItem('token',this.loginUser.token)
            localStorage.setItem('role',this.loginUser.data.role)
            localStorage.setItem('id',this.loginUser.data.id)
            this.router.navigate(['/add'])
          }
       })
    }

  }

  guestLogin(){
    this.router.navigate(['/catalogue'])
    localStorage.clear()
  }

}

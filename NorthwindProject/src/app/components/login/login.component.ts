import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/Models/login';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  _login:Login;
  tokenExpiration:string;
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router
    ) {
    
  }

  ngOnInit(): void {
      this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password:['',Validators.required]
    });
  }

  login(){
    if(this.loginForm.valid){
      this._login = Object.assign({},this.loginForm.value);
      this.authService.loginService(this._login).subscribe((response) => {
        this.toastrService.success("Giriş Başarılı.");
        this.router.navigate(['/products']);
        localStorage.setItem('token',response.data.token);
      },responseError =>  {
          this.toastrService.error("Kullanıcı adı veya parola hatalı!");

      });
    }
  }

}

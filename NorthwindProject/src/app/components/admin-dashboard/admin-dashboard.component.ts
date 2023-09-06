import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { User } from '../../Models/user';
import { Claim } from 'src/app/Models/claim';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  users:User[] = [];
  claims:Claim[];
  constructor(
    private adminService:AdminService,
    private toastrService:ToastrService,
    private router:Router
    ){}

    ngOnInit(): void {
        this.getUsers();
        console.log(this.users);
        this.getClaims();
        console.log(this.claims);

    }

    getUsers(){
      this.adminService.getUsersService().subscribe((response) => {
        this.users = response.data;
      });
    }

    getClaims(){
      for(let i = 0 ; i <this.users.length; i++ ){
        this.adminService.getUserClaimsService(this.users[i]).subscribe((response)=> {
          this.claims = response.data;
          console.log(this.claims);
        })
      }
      
    }
}

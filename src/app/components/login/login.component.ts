import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  showError = false;

  constructor(
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  login() {
    // if(this.userName === 'admin' && this.password === 'admin') {
    //   this.router.navigate(['/admin'])
    // }
    this.adminService.login({userName: this.userName, password: this.password}).subscribe((resp: any) => {
      if (resp.result) {
        this.router.navigate(['/admin']);
      } else {
        this.showError = true;
      }
    });
  }
}

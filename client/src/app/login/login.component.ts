import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => this.router.navigateByUrl("\members"),
    });
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: response => console.log(response),
      error: error => this.toastr.error(error.error)
    });
  }
}

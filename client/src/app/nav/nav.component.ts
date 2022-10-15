import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {


  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  logout(){
    this.accountService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}
  date = new Date();
  hour = this.date.getHours();
  money!: number;
  city!: string;
  account!: string;
  username!: string;
  ngOnInit() {
    this.consultarUsuari();
  }

  consultarUsuari() {
    this.userService.getUsers().subscribe((res) => {
      this.money = res.data.money;
      this.city = res.data.city;
      this.account = res.data.account_number;
      this.username = res.data.username;
    });
  }
}

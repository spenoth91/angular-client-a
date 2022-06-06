import {Component, OnInit} from '@angular/core';
import {AccountService} from './account/component/services/account.service';
import {CartService} from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public totalItem = 0;

  constructor(private auth: AccountService, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getFoods()
      .subscribe(res => {
        this.totalItem = res.length;
      });
  }

  public isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  public logout() {
    this.auth.logout();
  }
  public profile(){
    this.auth.getUserDetails();
  }
}

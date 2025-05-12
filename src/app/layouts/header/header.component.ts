import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { Router, RouterModule, NavigationEnd } from "@angular/router"
import { UserService } from "../../services/userService/user.service";
import { filter } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  imports:[RouterModule, CommonModule]
})
export class HeaderComponent implements OnInit{
  displayName : string = ''
  isLoggedIn: boolean = false;
  cartCount = 0

  constructor(private router: Router, private userService : UserService) {}
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkLoginStatus(); // Gọi mỗi khi chuyển route
      });
  }

  checkLoginStatus() {
    const token = localStorage.getItem('jwt');
    console.log("jwt", token)
    if (token) {
      this.getUserName();
    }
  }

  getUserName() {
    this.userService.getUserInformation().subscribe({
      next : (user) => {
        this.displayName = user.displayName
        this.isLoggedIn = true
      },
      error: (err) => {
        console.error('Load user failed', err);
      }
    })
  }

  logout() {
    localStorage.removeItem('jwt');
    this.isLoggedIn = false;
    this.displayName = '';
  }
}

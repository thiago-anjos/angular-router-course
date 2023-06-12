import { Component, OnInit } from "@angular/core";
import { AuthStore } from "./services/auth.store";
import { menuItems } from "./shared/interfaces/menuItens";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthStore) {}

  menuItems: menuItems[] = [
    {
      title: "Courses",
      route: "courses",
    },
    {
      title: "About",
      route: "about",
    },
  ];

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }
}

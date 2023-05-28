import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LoadingService } from "./loading.service";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from "@angular/router";

@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent implements OnInit {
  @Input()
  routing: boolean = false;

  @Input()
  detectRoutingOngoing: boolean = false;

  constructor(public loadingService: LoadingService, private route: Router) {}

  ngOnInit() {
    console.log(
      "detect",
      typeof this.detectRoutingOngoing,
      this.detectRoutingOngoing
    );
    if (this.detectRoutingOngoing) {
      this.route.events.subscribe((events) => {
        //console.log(events);
        //console.log(events instanceof NavigationStart);
        if (
          events instanceof NavigationStart ||
          events instanceof RouteConfigLoadStart
        ) {
          this.loadingService.loadingOn();
        } else if (
          events instanceof NavigationEnd ||
          events instanceof RouteConfigLoadEnd ||
          events instanceof NavigationError ||
          events instanceof NavigationCancel
        ) {
          this.loadingService.loadingOff();
        }
      });
    }
  }
}

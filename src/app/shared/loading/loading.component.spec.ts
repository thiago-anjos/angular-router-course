import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
} from "@angular/router";
import { LoadingComponent } from "./loading.component";

describe("LoadingComponent", () => {
  let component: LoadingComponent;
  let loadingServiceMock: any;
  let routerMock: any;

  beforeEach(() => {
    loadingServiceMock = {
      loadingOn: jest.fn(),
      loadingOff: jest.fn(),
    };
    routerMock = {
      events: {
        subscribe: jest.fn((callback: (event: any) => void) => {
          callback(new NavigationStart(1, "url"));
          callback(new RouteConfigLoadStart(null));
          callback(new NavigationEnd(1, "url", "urlAfterRedirects"));
          callback(new RouteConfigLoadEnd(null));
          callback(new NavigationError(1, "url", "error"));
          callback(new NavigationCancel(1, "url", "reason"));
        }),
      },
    };

    component = new LoadingComponent(loadingServiceMock, routerMock);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call loadingOn when router events occur", () => {
    component.detectRoutingOngoing = true;
    component.ngOnInit();
    expect(loadingServiceMock.loadingOn).toHaveBeenCalledTimes(2);
  });

  it("should call loadingOff when router events occur", () => {
    component.detectRoutingOngoing = true;
    component.ngOnInit();
    expect(loadingServiceMock.loadingOff).toHaveBeenCalledTimes(4);
  });
});

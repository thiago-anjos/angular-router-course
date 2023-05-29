import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Course } from "../model/course";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";
import { delay, mergeMap } from "rxjs/operators";

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private courses: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Course | Observable<Course> | Promise<Course> {
    const courseUrl = route.paramMap.get("courseUrlDynamic");
    return this.courses.loadCourseByUrl(courseUrl).pipe(delay(0));
  }
}

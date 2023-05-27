import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private courses: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Course | Observable<Course> | Promise<Course> {
    const courseUrl = route.paramMap.get("courseUrlDynamic");
    return this.courses.loadCourseByUrl(courseUrl);
  }
}

import { LessonSummary } from "../model/lesson-summary";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {
  constructor(private courses: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<LessonSummary[]> {
    const courseUrl = route.paramMap.get("courseUrlDynamic");
    return this.courses.loadAllCourseLessonsSummary(courseUrl);
  }
}

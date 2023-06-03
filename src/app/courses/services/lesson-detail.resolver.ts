import { Injectable } from "@angular/core";
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "./courses.service";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private courses: CoursesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): LessonDetail | Observable<LessonDetail> | Promise<LessonDetail> {
    const dynamicUrl = route.parent.paramMap.get("courseUrlDynamic");
    const lessonSeqNo = route.paramMap.get("lessonSeqNo");
    return this.courses.loadLessonDetail(dynamicUrl, lessonSeqNo);
  }
}

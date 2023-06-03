import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  lesson$: Observable<LessonDetail>;

  constructor(private routeActive: ActivatedRoute, private router: Router) {
    console.log("Created LessonDetailComponent...");
  }

  ngOnInit() {
    this.lesson$ = this.routeActive.data.pipe(
      map((data) => data["lessonData"])
    );
  }

  previous(lesson: LessonDetail) {
    // this.route.parent volta para a rota pai reactive-angular-course
    // depois adiciona o que precisa o que está neste array ["lessons", lesson.seqNo - 1]
    this.router.navigate(["lessons", lesson.seqNo - 1], {
      relativeTo: this.routeActive.parent,
    });
  }

  next(lesson: LessonDetail) {
    this.router.navigate(["lessons", lesson.seqNo + 1], {
      relativeTo: this.routeActive.parent,
    });
  }
}

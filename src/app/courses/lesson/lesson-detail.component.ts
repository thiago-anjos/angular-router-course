import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  lesson: LessonDetail;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log("Created LessonDetailComponent...");
  }

  ngOnInit() {
    this.lesson = this.route.snapshot.data["lessonData"];
    console.log(this.lesson);
  }

  previous(lesson: LessonDetail) {
    // this.route.parent volta para a rota pai reactive-angular-course
    // depois adiciona o que precisa o que está neste array ["lessons", lesson.seqNo - 1]
    this.router.navigate(["lessons", lesson.seqNo - 1], {
      relativeTo: this.route.parent,
    });
  }

  next(lesson: LessonDetail) {
    this.router.navigate(["lessons", lesson.seqNo + 1], {
      relativeTo: this.route.parent,
    });
  }
}

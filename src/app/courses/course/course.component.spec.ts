import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CourseComponent } from "./course.component";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";

describe("Course test", () => {
  let component: CourseComponent;
  let route: ActivatedRoute;

  beforeEach(() => {
    route = {
      snapshot: {
        data: {
          courseData: {} as Course,
        },
      },
    } as any;
    component = new CourseComponent(route);
  });

  it("should create", () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

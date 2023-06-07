import { MatDialog } from "@angular/material/dialog";
import { CoursesCardListComponent } from "./courses-card-list.component";
import { Course } from "../model/course";
import { of } from "rxjs";
import { CourseDialogComponent } from "../course-dialog/course-dialog.component";

describe("Course card list component", () => {
  let component: CoursesCardListComponent;
  let dialog: MatDialog;
  let course = {} as Course;

  beforeEach(() => {
    dialog = {
      open: jest.fn(() => ({
        afterClosed: jest.fn(() => of(true)),
      })),
    } as any;

    component = new CoursesCardListComponent(dialog);
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
  });

  it("should editCourse", () => {
    const emitSpy = jest.spyOn(component["coursesChanged"], "emit");
    component.editCourse(course);
    dialog.open(CourseDialogComponent);
    expect(emitSpy).toHaveBeenCalled();
  });
});

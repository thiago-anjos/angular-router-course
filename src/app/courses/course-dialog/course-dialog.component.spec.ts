import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CoursesService } from "../services/courses.service";
import { CourseDialogComponent } from "./course-dialog.component";
import { Course } from "../model/course";

describe("CourseDialogComponent", () => {
  let component: CourseDialogComponent;
  let fb: FormBuilder;
  let dialogRef: MatDialogRef<CourseDialogComponent, any>;
  let coursesService: CoursesService;

  beforeEach(() => {
    fb = new FormBuilder();
    dialogRef = {
      close: jest.fn(),
    } as any;
    coursesService = {
      saveCourse: jest.fn().mockReturnValue({ subscribe: jest.fn() }),
    } as any;
    const course = {} as Course; // Mock your Course object here if needed

    component = new CourseDialogComponent(
      fb,
      dialogRef,
      course,
      coursesService
    );

    component.form = fb.group({
      description: ["", Validators.required],
      category: ["", Validators.required],
      releasedAt: ["", Validators.required],
      longDescription: ["", Validators.required],
    });

    component.form.setValue({
      description: "Test Description",
      category: "Test Category",
      longDescription: "Test Long Description",
      releasedAt: "07/06/2023",
    });
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("Should save data to form", () => {
    component.save();

    expect(component.form.value).toEqual({
      description: "Test Description",
      category: "Test Category",
      longDescription: "Test Long Description",
      releasedAt: "07/06/2023",
    });

    const changes = component.form.value;
    coursesService.saveCourse("0", changes);
  });

  it("should close the dialog when close() is called", () => {
    component.close();
    expect(dialogRef.close).toHaveBeenCalled();
  });
});

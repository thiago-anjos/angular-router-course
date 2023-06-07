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
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize the form with the course values", () => {
    // Mock your Course object here if needed
    const course = {
      description: "Test Description",
      category: "Test Category",
      longDescription: "Test Long Description",
    } as Course;
    component.course = course;

    expect(component.form.value).toEqual({
      description: "Test Description",
      category: "Test Category",
      releasedAt: "",
      longDescription: "Test Long Description",
    });
  });

  it("should call the saveCourse method and close the dialog when save() is called", () => {
    component.form.setValue({
      description: "Test Description",
      category: "Test Category",
      releasedAt: "2023-06-05",
      longDescription: "Test Long Description",
    });

    component.save();

    expect(coursesService.saveCourse).toHaveBeenCalledWith(
      component.course.id,
      {
        description: "Test Description",
        category: "Test Category",
        releasedAt: "2023-06-05",
        longDescription: "Test Long Description",
      }
    );
    expect(dialogRef.close).toHaveBeenCalledWith({
      description: "Test Description",
      category: "Test Category",
      releasedAt: "2023-06-05",
      longDescription: "Test Long Description",
    });
  });

  it("should close the dialog when close() is called", () => {
    component.close();

    expect(dialogRef.close).toHaveBeenCalled();
  });
});

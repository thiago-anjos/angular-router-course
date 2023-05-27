import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CourseComponent } from "./course.component";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";

describe("Course test", () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { courseData: {} as Course },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize course", () => {
    expect(component.course).toBeDefined();
  });
});

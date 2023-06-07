import { Observable, of } from "rxjs";
import { LoadingService } from "../../shared/loading/loading.service";
import { CoursesService } from "../services/courses.service";
import { HomeComponent } from "./home.component";
import { Course } from "../model/course";

describe("Teste home component", () => {
  let component: HomeComponent;
  let courses: CoursesService;
  let loading: LoadingService;

  beforeEach(() => {
    loading = {
      showLoaderUntilCompleted: jest.fn((observable: Observable<any>) => {
        return observable;
      }),
    } as any;

    courses = {
      loadAllCourses: jest.fn(() => of({} as Course)),
      filterByCategory: jest.fn(),
    } as any;

    component = new HomeComponent(courses, loading);
  });

  it("component should be initialized", () => {
    component.ngOnInit();
  });

  it("deve filtrar e ordenar os cursos por categoria", () => {
    const courses = [
      {
        id: "7",
        description: "Angular PWA - Progressive Web Apps Course",
        longDescription:
          "Learn Angular Progressive Web Applications, build the future of the Web Today.",
        iconUrl:
          "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png",
        courseListIcon:
          "https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png",
        category: "ADVANCED",
        lessonsCount: 8,
        seqNo: 11,
        url: "angular-pwa-course",
        price: 50,
        uploadedImageUrl: "",
      },
      {
        id: "100",
        description: "Angular Fundamentals",
        longDescription: "Learn the basics of Angular.",
        iconUrl:
          "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-fundamentals-course.png",
        courseListIcon:
          "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-fundamentals-course.png",
        category: "BEGINNER",
        lessonsCount: 8,
        seqNo: 11,
        url: "angular-fundamentals-course",
        price: 0,
        uploadedImageUrl: "",
      },
    ];

    const filteredCourses$ = component.filterByCategory(
      of(courses),
      "BEGINNER"
    );

    filteredCourses$.subscribe((filteredCourses) => {
      expect(filteredCourses.length).toBe(1);
      expect(filteredCourses[0].id).toBe("100");
      expect(filteredCourses[0].category).toBe("BEGINNER");
    });
  });
});

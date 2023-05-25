import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { LicenseComponent } from "./license.component";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from "@angular/platform-browser/animations";

describe("LicenseComponent", () => {
  let component: LicenseComponent;
  let fixture: ComponentFixture<LicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LicenseComponent],
      imports: [
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should enable the button when the form is valid", () => {
    const compiled = fixture.nativeElement;
    const inputElement = compiled.querySelector("input");
    const buttonElement = compiled.querySelector("button");

    inputElement.value = "EGS3749";
    inputElement.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(buttonElement.disabled).toBeFalsy();
    component.submitForm();
  });

  it("should disable the button when the form is invalid", () => {
    const compiled = fixture.nativeElement;
    const buttonElement = compiled.querySelector("button");
    fixture.detectChanges();
    expect(buttonElement.disabled).toBeTruthy();
  });
});

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "license",
  templateUrl: "./license.component.html",
  styleUrls: ["./license.component.scss"],
})
export class LicenseComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.builderForm();
  }

  builderForm(): void {
    this.form = this.fb.group({
      licensePlate: "aaaaaa",
    });
  }

  submitForm(): void {
    console.log("licensePlate", this.form.value.licensePlate);
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { licensePlateSouthAmericaValidator } from "../../shared/validators/licensePlate";

@Component({
  selector: "license",
  templateUrl: "./license.component.html",
  styleUrls: ["./license.component.scss"],
})
export class LicenseComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.builderForm();
  }

  builderForm(): void {
    this.form = this.fb.group({
      licensePlate: [
        "",
        [Validators.required, licensePlateSouthAmericaValidator()],
      ],
    });
  }

  submitForm(): void {
    console.log("licensePlate", this.form.value.licensePlate);
    console.log(this.form.valid);
  }
}

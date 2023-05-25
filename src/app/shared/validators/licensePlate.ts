import { AbstractControl, ValidatorFn } from "@angular/forms";

export function licensePlateSouthAmericaValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const license = control.value;
    if (!license) return null;
    const licenseRegex = /^[A-Z]{3}\d{4}$/;
    if (!licenseRegex.test(license)) {
      return { licensePlateSouthAmerica: true };
    }
    return null;
  };
}

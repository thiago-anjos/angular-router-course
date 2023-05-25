import { FormControl } from "@angular/forms";
import { licensePlateSouthAmericaValidator } from "./licensePlate";

describe("Test licensePlate custom validator", () => {
  const validator = licensePlateSouthAmericaValidator();

  it("should return null if licensePlate is not valid", () => {
    const control = new FormControl("ABC1234");
    const result = validator(control);
    expect(result).toBeNull();
  });

  it("should return an object if licensePlate is invalid", () => {
    const control = new FormControl("AAAAAA");
    const result = validator(control);
    expect(result).toEqual({ licensePlateSouthAmerica: true });
  });

  it("should return null if no licensePlate was specified", () => {
    const control = new FormControl("");
    const result = validator(control);
    expect(result).toBeNull();
  });
});

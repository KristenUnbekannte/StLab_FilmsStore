import { Component, Input } from "@angular/core";
import { FormControl, AbstractControl } from "@angular/forms";

@Component({
  selector: "app-validator",
  templateUrl: "./validator.component.html"
})
export class ValidatorComponent {
  @Input() field: FormControl;

  static MatchPassword(control: AbstractControl) {
    let patternValue = control.get("passwordCtrl").value;
    let controlValue = control.get("confirmPasswordCtrl").value;

    if (patternValue != controlValue) {
      control.get("confirmPasswordCtrl").setErrors({ confirmPassword: true });
    } else {
      return null;
    }
  }

  public get validatorMessages(): any {
    const field = this.field;
    if (!field || !field.errors) {
      return false;
    }
    const errors: string[] = [];
    const config = {
      required: "Field must not be empty",
      pattern: "Field does not match to pattern"
    };

    if (field.errors.hasOwnProperty("minlength")) {
      config["minlength"] = `Field must contain at least ${
        field.errors.minlength.requiredLength
      } characters`;
    }
    if (field.errors.hasOwnProperty("maxlength")) {
      config["maxlength"] = `Field must contain a maximum of ${
        field.errors.maxlength.requiredLength
      } characters`;
    }

    if (field.errors.hasOwnProperty("confirmPassword")) {
      config["confirmPassword"] = "Password and Confirm password didn't match";
    }

    Object.keys(field.errors).forEach((error: string) => {
      errors.push(config[error]);
    });

    return errors;
  }
}

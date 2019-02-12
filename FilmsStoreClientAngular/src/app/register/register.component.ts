import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { AccountService } from "../services/account.service";
import { SessionService } from "../services/session.service";
import { AccountInfo } from "../models/accountInfo";
import { ValidatorComponent } from "../validator/validator.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  registerFormGroup: FormGroup;
  hide = true;
  error: string;

  constructor(
    private accountService: AccountService,
    private sessionService: SessionService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.registerFormGroup = this.formBuilder.group(
      {
        userNameCtrl: ["", Validators.required],
        passwordCtrl: ["", [Validators.required, Validators.minLength(6)]],
        confirmPasswordCtrl: [
          "",
          [Validators.required, Validators.minLength(6)]
        ]
      },
      {
        validator: ValidatorComponent.MatchPassword
      }
    );
  }

  onRegister(): void {
    if (!this.registerFormGroup.invalid) {
      const login = this.registerFormGroup.get("userNameCtrl").value;
      const password = this.registerFormGroup.get("passwordCtrl").value;

      this.accountService.register(login, password).subscribe(
        (data: AccountInfo) => {
          this.sessionService.setItems(data);
          this.location.back();
        },
        error => {
          this.error = error.error;
        }
      );
    }
  }
}

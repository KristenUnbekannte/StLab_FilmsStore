import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { AccountService } from "../services/account.service";
import { SessionService } from "../services/session.service";
import { AccountInfo } from "../models/accountInfo";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  error: string = "";
  hide = true;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private location: Location
  ) {
    this.loginFormGroup = this.formBuilder.group({
      userNameCtrl: ["", Validators.required],
      passwordCtrl: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    if (!this.loginFormGroup.invalid) {
      const login = this.loginFormGroup.get("userNameCtrl").value;
      const password = this.loginFormGroup.get("passwordCtrl").value;

      this.accountService.login(login, password).subscribe(
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

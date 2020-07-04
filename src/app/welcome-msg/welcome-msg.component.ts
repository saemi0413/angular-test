import {AfterViewInit, Component} from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  userName = '';
  welcomeMsg = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  onChange() {
    this.valid = this.userName.length > 0;
  }
  constructor(private i18nSupportService: I18nSupportService, private snackbar: MatSnackBar) {
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupportService.getWelcomeMsgByCode(this.userName);
  }
  ngAfterViewInit(): void {
    const checkTouchedFn = () => {
      if(this.valid) return;
      this.snackbar.open('이름을 입력해 주세요', '확인', {duration: 3000});
    };
    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name) {
    this.valid = name.length > 0;
  }
}

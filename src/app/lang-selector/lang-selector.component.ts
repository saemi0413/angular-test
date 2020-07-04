import { Component, OnInit } from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";
import {LANG_METADATA} from "../lang-metadata";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  langCode: string;
  langMetadata = LANG_METADATA;
  constructor(public i18nSupportService: I18nSupportService) {
    this.langCode = i18nSupportService.langCode;
  }

  syncToService(code){
    this.i18nSupportService.langCode = code;
  }

  ngOnInit(): void {
  }

  setLangCode(code: string) {
    this.langCode = code;
    this.i18nSupportService.langCode = this.langCode;
  }

}

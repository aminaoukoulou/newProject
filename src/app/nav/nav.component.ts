import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
  }

}

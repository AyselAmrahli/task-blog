import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    public languageService: LanguageService,
  ) { }

  switchLanguage(lang) {
    this.languageService.switchLanguage(lang);
  }


  ngOnInit() {

  }

}

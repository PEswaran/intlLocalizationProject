import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate-pane',
  templateUrl: './translate-pane.component.html',
  styleUrls: ['./translate-pane.component.scss']
})

export class TranslatePaneComponent implements OnInit {
  user: string;
  public translatedText: string;
  public supportedLanguages: any[];
  constructor() { }

  ngOnInit() {
    this.user = 'person';
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' },
      { display: '华语', value: 'zh' },
    ];
  }

}

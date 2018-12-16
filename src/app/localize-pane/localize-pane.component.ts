import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localize-pane',
  templateUrl: './localize-pane.component.html',
  styleUrls: ['./localize-pane.component.scss']
})
export class LocalizePaneComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}

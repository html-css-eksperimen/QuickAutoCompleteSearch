import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QuickAutoCompleteApp';

  ngOnInit(): void {

    // lazy loading css
    // const element = document.createElement('link');
    // element.rel = 'stylesheet';
    // element.href = 'font-awe-style.css';
    // element.type = 'text/css';

    // const defercss = document.getElementsByTagName('link')[0];
    // defercss.parentNode.insertBefore(element, defercss);
  }
}

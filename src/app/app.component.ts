import { Component } from '@angular/core';
import SeatchartJS, { Options } from 'seatchart';

interface SeatchartProps {
  options: Options;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labibi-angular-template';

  constructor(
    private seatchartJS:SeatchartJS
  ) {

  }

  ngOnInit(): void {
    console.log(this.seatchartJS);
  }

}


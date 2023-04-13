import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import SeatchartJS, { Options } from 'seatchart';

// interface SeatchartProps {
//   options: Options;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labibi-angular-template';
  @ViewChild('elementRef', { static: true }) elementRef!: ElementRef<HTMLDivElement>;
  options: Options = {
    map: {
      rows: 10,
      columns: 10,
      seatTypes: {
        default: {
          label: 'Economy',
          cssClass: 'economy',
          price: 15,
        },
        first: {
          label: 'First Class',
          cssClass: 'first-class',
          price: 25,
          seatRows: [0, 1, 2],
        },
        reduced: {
          label: 'Reduced',
          cssClass: 'reduced',
          price: 10,
          seatRows: [7, 8, 9],
        },
      },
      disabledSeats: [
        { row: 0, col: 0 },
        { row: 0, col: 9 },
      ],
      reservedSeats: [
        { row: 0, col: 3 },
        { row: 0, col: 4 },
      ],
      selectedSeats: [{ row: 0, col: 5 }, { row: 0, col: 6 }],
      rowSpacers: [3, 7],
      columnSpacers: [5],
    },
  };
  private seatchartRef?: SeatchartJS;
  constructor() { }

  ngOnInit(): void {
    if (this.elementRef && !this.seatchartRef) {
      this.seatchartRef = new SeatchartJS(this.elementRef.nativeElement, this.options);
      this.seatchartRef.clearCart();
    }
  }
  ngOnDestroy(): void {
    if (this.seatchartRef) {
      // this.seatchartRef.destroy();
      this.seatchartRef = undefined;
    }
  }

  tt(): void{
    this.seatchartRef!.addEventListener('cartchange',function(e){
      console.log(e);
    })
  }
}



import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss'],
  imports: [ButtonComponent]
})
export class CalculatriceComponent {
  public input: string = '';
  public result: string = '';


  handleButtonClick(buttonValue: string) {
    if (buttonValue === 'C') {
      this.clear();
    } else if (buttonValue === '=') {
      this.calculate();
    } else {
      this.input += buttonValue;
    }
  }

  clear() {
    this.input = '';
    this.result = '';
  }

  calculate() {
    try {
      this.result = eval(this.input).toString();
    } catch (e) {
      this.result = 'Erreur';
    }
  }
}

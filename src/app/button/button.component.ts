import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', 'C', '='];

  @Output() buttonClick = new EventEmitter<string>();

  onButtonClick(button: string) {
    this.buttonClick.emit(button);
  }
}

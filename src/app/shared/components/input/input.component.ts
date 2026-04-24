import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  type = input<'text' | 'email' | 'password'>('text');
  placeholder = input<string>('');
  iconUrl = input<string | null>('');
  value = input<string | null>('');
  controlValue = output<string>();

  onInput(value: string): void {
    this.controlValue.emit(value);
  }
}

import {
  Component,
  ContentChild,
  ElementRef,
  input,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  imports: [FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @ContentChild('buttonContent') btnRef: ElementRef | undefined;
  disabled = input(false);
  btnClick = output<void>();

  value = '';

  onBtnClick(): void {
    this.btnClick.emit();
  }
}

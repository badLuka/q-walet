import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = signal('q-wallet');

  onBtnClick(): void {
    console.log('Клик из дочернего элемента ушел наружу!!!');
  }

  isButtinClicked = false;

  onButtonClick() {
    this.isButtinClicked = !this.isButtinClicked;
  }

  onInputChange($event: string) {
    console.log($event);
  }
}

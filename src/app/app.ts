import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
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
}

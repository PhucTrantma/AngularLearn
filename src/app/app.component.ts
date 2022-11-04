import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './custom-element/popup.component';
import { AdService } from './services/ad.service';
import { PopupService } from './services/popup.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AdService, PopupService],
})
export class AppComponent {
  //
  title = 'my-first-project';
  hiddenTag = false;
  actionName = 'phucherose';
  isShowSquare = false;
  isFillRed = true;
  clickMessage1 = '';

  fontSizePx = 16;
  //
  constructor(
    public adService: AdService,
    injector: Injector,
    public popup: PopupService
  ) {
    const PopupElement = createCustomElement(PopupComponent, { injector });

    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
  a = false;

  // method

  toggleSquare() {
    console.log('toogle');
    this.isShowSquare = !this.isShowSquare;
  }
  clickMessageThroughDirective(value: string) {
    this.clickMessage1 = value;
  }
  onKeydown(val: Event) {
    console.log(val);
  }
}

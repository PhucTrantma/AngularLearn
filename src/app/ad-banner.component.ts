import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from './directives/ad.directive';
import { AdItem } from './models/ad-item';
import { AdComponent } from './models/ad.component';
@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template adHost></ng-template>
    </div>
  `,
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  interval: any;
  currentIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  ngOnInit(): void {
    this.getAds();
    this.loadComponent();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConditionContentProjectComponent } from './condition-content-project/condition-content-project.component';
import {
  ZippyComponent,
  ZippyContentDirective,
  ZippyToggleDirective,
} from './templates/example-zippy.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { AdDirective } from './directives/ad.directive';
import { ClickDirective1 } from './directives/click.directive';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { PopupComponent } from './custom-element/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SizerComponent } from './sizer/sizer.component';
@NgModule({
  declarations: [
    AppComponent,
    ConditionContentProjectComponent,
    ZippyComponent,
    ZippyContentDirective,
    ZippyMultislotComponent,
    ZippyToggleDirective,
    AdDirective,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdBannerComponent,
    PopupComponent,
    ClickDirective1,
    SizerComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

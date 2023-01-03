import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ViewerWebComponent } from './web-component/viewer-web/viewer-web.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerWebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {
    if (environment.webComponentBuild) {
      const viewerWebComponent = createCustomElement(ViewerWebComponent, { injector });
      customElements.define('viewer-web-component', viewerWebComponent);
    }
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    if (!environment.webComponentBuild) {
      appRef.bootstrap(AppComponent);
    }
  }
}

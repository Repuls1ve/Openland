import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CoreModule } from '../core/core.module'
import { SharedModule } from '../shared/shared.module'

import { RootComponent } from './view/root.component'

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {}

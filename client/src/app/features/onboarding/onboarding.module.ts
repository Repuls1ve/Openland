import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { LayoutComponent } from './containers/layout/layout.component'
import { OnboardingRoutingModule } from './routing/onboarding-routing.module'

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule {}

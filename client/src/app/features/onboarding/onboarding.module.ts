import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { OnboardingRoutingModule } from './routing/onboarding-routing.module'

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule {}

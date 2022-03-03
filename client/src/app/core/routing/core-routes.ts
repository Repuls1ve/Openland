import { Routes } from '@angular/router'

export enum CoreRoutesPaths {
  Onboarding = 'onboarding'
}

export const LoadChildrenCallbacks = {
  Onboarding: () => import('../../features/onboarding/onboarding.module')
  .then(m => m.OnboardingModule)
}

export const routes: Routes = [
  {
    path: CoreRoutesPaths.Onboarding,
    loadChildren: LoadChildrenCallbacks.Onboarding
  }
]
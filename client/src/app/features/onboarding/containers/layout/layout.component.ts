import { Component, Input } from '@angular/core'

@Component({
  selector: 'onboarding-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input()
  public topbarLayout = true
}

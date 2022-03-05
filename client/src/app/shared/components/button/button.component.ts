import { Component, HostBinding, Input } from '@angular/core'

export type ButtonThemes = 'primary' | 'secondary'

@Component({
  selector: '[shared-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public theme: ButtonThemes = 'primary'

  @HostBinding('class')
  public get classes() {
    return this.theme 
  }
}

import { Component, Input, QueryList, ViewChildren } from '@angular/core'
import { CodeInputItemComponent } from './code-input-item/code-input-item.component'

@Component({
  selector: 'shared-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent {
  @ViewChildren(CodeInputItemComponent)
  public items!: QueryList<CodeInputItemComponent>

  @Input()
  public length = 6

  public focusNext(index: number): void {
    const isLast = index == this.length - 1
    
    if (!isLast) {
      const nextInput = this.items.get(index + 1)!
      nextInput.setFocus()
    }
  }

}

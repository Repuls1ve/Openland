import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'

export const codeInitialState = ''

@Component({
  selector: 'shared-code-input-item',
  templateUrl: './code-input-item.component.html',
  styleUrls: ['./code-input-item.component.scss']
})
export class CodeInputItemComponent {
  private value = codeInitialState

  @ViewChild('input')
  public codeInput!: ElementRef<HTMLInputElement>

  @Output()
  public readonly keyInputSuccess = new EventEmitter<string>() 

  private isCodeValid(code: string): boolean {
    const isInitial = this.isInitial(code)
    const isCorrect = /^\d{1}$/.test(code)

    return isInitial || isCorrect
  }
  
  private isInitial(code: string): boolean {
    return code === codeInitialState
  }

  public setFocus(): void {
    this.codeInput.nativeElement.focus()
  }

  public get code(): string {
    return this.value
  }

  public set code(value: string) {
    if (!this.isCodeValid(value)) {
      return
    }

    if (!this.isInitial(value)) {
      this.keyInputSuccess.emit(value)
    }

    this.value = value
  }
}

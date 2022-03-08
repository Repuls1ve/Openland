import { Directive, EventEmitter, HostListener, Output } from '@angular/core'

export const StringDigits = [...Array(10).keys()].map(digit => String(digit))
export const ExceptionKeys = ['Backspace', 'Tab', 'End', 'Home', 'Enter']

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
  private readonly allowedKeys = StringDigits
  private readonly exceptionKeys = ExceptionKeys

  @Output()
  public readonly keyInputSuccess = new EventEmitter<KeyboardEvent>()

  @Output()
  public readonly keyInputForbid = new EventEmitter<KeyboardEvent>()

  @HostListener('keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {
    const key = event.key

    const isCtrlKey = event.ctrlKey
    const isExceptionKey = this.exceptionKeys.includes(key)
    const isAllowed = this.allowedKeys.includes(key)

    if (!isAllowed && !isCtrlKey && !isExceptionKey) {
      event.preventDefault()
      return this.keyInputForbid.emit(event)
    }
  
    this.keyInputSuccess.emit(event)
  }

  @HostListener('paste', ['$event'])
  public onPaste(event: ClipboardEvent): void {
    const regex = /^\d+$/
    const pasted = event.clipboardData?.getData('text/plain')

    if (!pasted?.match(regex)) {
      event.preventDefault()
    }
  }
}

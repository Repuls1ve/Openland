import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/controls/text-field/text-field.component'
import { CodeInputComponent } from './components/controls/code-input/code-input.component'
import { CodeInputItemComponent } from './components/controls/code-input/code-input-item/code-input-item.component'
import { NumbersOnlyDirective } from './directives/input-validation/numbers-only/numbers-only.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TimesPipe } from './pipes/times/times.pipe'

@NgModule({
  declarations: [
    ButtonComponent,
    TextFieldComponent,
    CodeInputComponent,
    CodeInputItemComponent,
    NumbersOnlyDirective,
    TimesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    TextFieldComponent,
    CodeInputComponent,
    CodeInputItemComponent,
    NumbersOnlyDirective,
    TimesPipe
  ]
})
export class SharedModule {}
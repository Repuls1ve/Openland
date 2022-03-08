import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CodeInputItemComponent } from './code-input-item.component'

describe('CodeInputItemComponent', () => {
  let component: CodeInputItemComponent;
  let fixture: ComponentFixture<CodeInputItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeInputItemComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeInputItemComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

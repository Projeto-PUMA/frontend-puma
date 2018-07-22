import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalAgentComponent } from './external-agent.component';

describe('ExternalAgentComponent', () => {
  let component: ExternalAgentComponent;
  let fixture: ComponentFixture<ExternalAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

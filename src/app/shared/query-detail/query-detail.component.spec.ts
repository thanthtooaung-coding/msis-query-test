import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryDetailComponent } from './query-detail.component';

describe('QueryDetailComponent', () => {
  let component: QueryDetailComponent;
  let fixture: ComponentFixture<QueryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

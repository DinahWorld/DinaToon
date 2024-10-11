import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DinatoonDetailComponent} from './dinatoon-detail.component';

describe('DinatoonDetailComponent', () => {
    let component: DinatoonDetailComponent;
    let fixture: ComponentFixture<DinatoonDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DinatoonDetailComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(DinatoonDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
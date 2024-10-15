import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DinatoonListComponent} from './dinatoon-list.component';

describe('DinatoonListComponent', () => {
    let component: DinatoonListComponent;
    let fixture: ComponentFixture<DinatoonListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DinatoonListComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(DinatoonListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
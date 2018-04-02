import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroPageComponentComponent} from './hero-page-component.component';

describe('HeroPageComponentComponent', () => {
    let component: HeroPageComponentComponent;
    let fixture: ComponentFixture<HeroPageComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeroPageComponentComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroPageComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

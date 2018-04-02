import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoPageComponentComponent} from './todo-page-component.component';

describe('TodoPageComponentComponent', () => {
    let component: TodoPageComponentComponent;
    let fixture: ComponentFixture<TodoPageComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TodoPageComponentComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoPageComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

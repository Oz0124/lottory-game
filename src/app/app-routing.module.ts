import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {LotteryPageComponentComponent} from './lottery/lottery-page-component/lottery-page-component.component';
import {HeroPageComponentComponent} from './hero-page-component/hero-page-component.component';
import {TodoPageComponentComponent} from './todo-page-component/todo-page-component.component';

const routes: Routes = [
	{
		path: '', 
		redirectTo: '/lottery', 
		pathMatch: 'full'
	},
	{
		path: 'lottery', 
		component: LotteryPageComponentComponent 
	},
	{
		path: 'hero', 
		component: HeroPageComponentComponent 
	},
	{
		path: 'todo', 
		component: TodoPageComponentComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule { }

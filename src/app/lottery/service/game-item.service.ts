import {Injectable} from '@angular/core';
import {GameItem} from '../model/game-item';

@Injectable()
export class GameItemService {
	// 初始值為空陣列
	// 基本項目
	items: GameItem[] = [];
	// 項目清單
	list: GameItem[] = [];

	constructor() { }

	add(value: GameItem): void {
		this.items.push(value);
	}

	clear(): void {
		this.items = [];
		this.list = [];
	}

	// 產生項目清單
	getRandomList(): void {
		let size = this.items.length - 1;
		for (let loop = 0; loop < 24; loop++) {
			let index = Math.round(Math.random() * size);
			// 複製物件
			let gameItem = Object.assign({}, this.items[index]);
			this.list.push(gameItem);
		}
	}

	getActive(): GameItem {
		for (let index = 0; index < this.list.length; index++) {
			if (this.list[index].isActive === true) {
				return this.list[index];
			}
		}
		return this.list[0];
	}

	getActiveIndex(): number {
		return this.list.indexOf(this.getActive());
	}

	getListNextIndex(): number {
		let activeIndex = this.getActiveIndex();
		return (activeIndex > this.list.length - 2) ? 0 : (activeIndex + 1);
	}

	getActiveId(): number {
		return this.getActive().id;
	}

	setNextItem(): void {
		let activeIndex = this.getActiveIndex();
		let nextIndex = this.getListNextIndex();
		this.list[activeIndex].isActive = false;
		this.list[nextIndex].isActive = true;
	}

	resetItemActive(): void {
		this.items.forEach(function (value, index) {
			value.isActive = false;
		});
	}

}

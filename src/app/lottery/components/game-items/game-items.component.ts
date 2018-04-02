import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GameItem} from '../../model/game-item';
import {GameControl} from '../../model/game-control';

@Component({
	selector: 'app-game-items',
	templateUrl: './game-items.component.html',
	styleUrls: ['./game-items.component.scss']
})
export class GameItemsComponent implements OnInit {


	@Input() items: GameItem[];
	@Output() plusCoinEvent = new EventEmitter();
	@Output() minusCoinEvent = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	minus(item: GameItem) {
		this.minusCoinEvent.emit(item);
	}

	plus(item: GameItem) {
		this.plusCoinEvent.emit(item);
	}

}

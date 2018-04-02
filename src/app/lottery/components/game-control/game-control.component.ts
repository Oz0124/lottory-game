import {Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
import {GameCoin} from '../../model/game-coin';
import {GameControl} from '../../model/game-control';
import {TranslateService} from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

	@Input() gameCoin: GameCoin;
	@Input() gameControl: GameControl;
	@Output() playGameEvent = new EventEmitter();
	@Output() stopGameEvent = new EventEmitter();
	@Output() calculateStartEvent = new EventEmitter();
	@Output() calculateEndEvent = new EventEmitter();

	listColumeNumber: number = 7;

	calculateBoxWidth: number;
	calculateBoxHeight: number;
	calculateBoxOffsetTop: number;
	calculateBoxOffsetLeft: number;

	constructor(public translate: TranslateService) { }

	ngOnInit() {
		this.onResize();
	}

	@HostListener("window:resize", [])
	onResize() {
		let gameBoxWidth = $('app-game-control').parent().width();
		let itemWidth = gameBoxWidth / this.listColumeNumber;

		this.calculateBoxWidth = gameBoxWidth - (2 * itemWidth);
		this.calculateBoxHeight = gameBoxWidth - (2 * itemWidth);
		this.calculateBoxOffsetTop = itemWidth * 3;
		this.calculateBoxOffsetLeft = itemWidth;
	}

	start(): void {
		this.playGameEvent.emit();
	}

	stop(): void {
		this.stopGameEvent.emit();
		this.calculateStartEvent.emit();
	}

	get(): void {
		this.calculateEndEvent.emit();
	}

}

import {Injectable} from '@angular/core';
import {GameControl} from '../model/game-control';
import {GameItemService} from './game-item.service';

@Injectable()
export class GameControllerService {
	speedSec: number;

	gameControl: GameControl = {
		isStart: false,
		isGet: false,
		gameInterval: null
	};

	constructor(private gameItemService: GameItemService) { }

	// 開始遊戲
	playGame(): void {
		/*
		let t = null;
		let nextCount = 0;

		this.speedSec = 200;
		
		this.gameControl.gameInterval = setInterval(() => {

		// 自動停止
		if (nextCount > 400) {
			this.stopGame();
		}
      	
      	// 由慢至快跳動項目
		if (t === null) {
			t = setTimeout(() => {
				this.gameItemService.setNextItem();

				if (this.speedSec > 10) {
					this.speedSec -= 10;
				}

				nextCount ++;

				clearTimeout(t);
				t = null;
			}, this.speedSec);
		}
      
		}, 10);
		*/
		this.gameControl.gameInterval = setInterval(() => {
      		this.gameItemService.setNextItem();
      	}, 10);
		this.setIsStart();
	}

	stopGame(): void {
		clearInterval(this.gameControl.gameInterval);
		this.setIsStop();		
	}

	setIsStart() {
		this.gameControl.isStart = true;
		this.gameControl.isGet = false;
	}

	setIsStop() {
		this.gameControl.isGet = true;
	}

	setIsGet() {
		this.gameControl.isStart = false;
		this.gameControl.isGet = false;
	}

}

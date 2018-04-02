import {Injectable} from '@angular/core';
import {GameItem} from '../model/game-item';
import {GameCoin} from '../model/game-coin';
import {GameItemService} from './game-item.service';

@Injectable()
export class GameCoinService {

	gameCoin: GameCoin = {
		totalCoin: 0,
		usedCoin: 0,
		winCoin: 0
	};
	constructor(private gameItemService: GameItemService) { }

	// method
	addTotalCoin(value: number): void {
		this.gameCoin.totalCoin += value;
	}


	// 下注
	plusCoin(item: GameItem): void {
		if (this.gameCoin.totalCoin >= (this.gameCoin.usedCoin + item.price)) {
			item.count += 1;
			this.gameCoin.usedCoin += item.price;
		}
	}

	minusCoin(item: GameItem): void {
		if (item.count > 0) {
			item.count -= 1;
			this.gameCoin.usedCoin -= item.price;
		}
	}

	// 重設
	resetPlayCoin(): void {
		this.gameCoin.usedCoin = 0;
		this.gameCoin.winCoin = 0;
		this.gameItemService.items.forEach(function (value, index) {
			value.count = 0;
		});
	}

	// 結算
	calculateStart(): void {
		let activeId = this.gameItemService.getActiveId();
		let winItem = this.gameItemService.items.filter(GameItem => GameItem.id === activeId)[0];
		winItem.isActive = true;
		this.gameCoin.winCoin = winItem.count * winItem.price * 2;
	}

	calculateEnd(): void {
		this.gameCoin.totalCoin -= this.gameCoin.usedCoin;
		this.gameCoin.totalCoin += this.gameCoin.winCoin;
		this.resetPlayCoin();
		this.gameItemService.resetItemActive();
	}

}

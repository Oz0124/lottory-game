import {Component, OnInit} from '@angular/core';
import {GameItem} from '../model/game-item';
import {GameControl} from '../model/game-control';
import {GameItemService} from '../service/game-item.service';
import {GameControllerService} from '../service/game-controller.service';
import {GameCoinService} from '../service/game-coin.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-lottery-page-component',
	templateUrl: './lottery-page-component.component.html',
	styleUrls: ['./lottery-page-component.component.scss'],
	providers: [
		{
			provide: GameItemService, useClass: GameItemService
		},
		{
			provide: GameControllerService, useClass: GameControllerService
		},
		{
			provide: GameCoinService, useClass: GameCoinService
		}
	]
})
export class LotteryPageComponentComponent implements OnInit {

	constructor(public translate: TranslateService, private gameItemService: GameItemService, private gameControllerService: GameControllerService, private gameCoinService: GameCoinService) { }

	ngOnInit() {

		let makeGameItems = () => {
			this.gameItemService.clear();

			this.gameItemService.add({
				id: 1,
				title: this.translate.instant('lottery.apple'),
				price: 5,
				count: 0,
				isActive: false,

				itemWidth: 0,
				itemHeight: 0,
				offsetTop: 0,
				offsetBottom: 0,
				offsetLeft: 0,
				offsetRight: 0
			});
			this.gameItemService.add({
				id: 2,
				title: this.translate.instant('lottery.orange'),
				price: 10,
				count: 0,
	 			isActive: false,
	 			itemWidth: 0,
				itemHeight: 0,
				offsetTop: 0,
				offsetBottom: 0,
				offsetLeft: 0,
				offsetRight: 0
			});
			this.gameItemService.add({
				id: 3,
				title: this.translate.instant('lottery.melon'),
				price: 15,
				count: 0,
				isActive: false,
				itemWidth: 0,
				itemHeight: 0,
				offsetTop: 0,
				offsetBottom: 0,
				offsetLeft: 0,
				offsetRight: 0
			});
			this.gameItemService.add({
				id: 4,
				title: this.translate.instant('lottery.bell'),
				price: 20,
				count: 0,
				isActive: false,
				itemWidth: 0,
				itemHeight: 0,
				offsetTop: 0,
				offsetBottom: 0,
				offsetLeft: 0,
				offsetRight: 0
			});
			this.gameItemService.add({
				id: 5,
				title: this.translate.instant('lottery.watermelon'),
				price: 20,
				count: 0,
				isActive: false,
				itemWidth: 0,
				itemHeight: 0,
				offsetTop: 0,
				offsetBottom: 0,
				offsetLeft: 0,
				offsetRight: 0
			});
			this.gameItemService.add({
				id: 6,
				title: this.translate.instant('lottery.star'),
				price: 30,
				count: 0,
				isActive: false,
				itemWidth: 0,
				itemHeight: 0,
				offsetTop: 0,
				offsetBottom: 0,
				offsetLeft: 0,
				offsetRight: 0
			});
			this.gameItemService.add({
				id: 7,
				title: this.translate.instant('lottery.seven'),
				price: 40,
				count: 0,
				isActive: false,
				itemWidth: 0,
				itemHeight: 0,
				offsetTop: 0,
				offsetBottom: 0,
				offsetLeft: 0,
				offsetRight: 0
			});
			this.gameItemService.add({
				id: 8,
				title: this.translate.instant('lottery.bar'),
				price: 100,
				count: 0,
				isActive: false,
				itemWidth: 0,
				itemHeight: 0,
				offsetTop: 0,
				offsetBottom: 0,
				offsetLeft: 0,
				offsetRight: 0
			});
	    	this.gameItemService.getRandomList();
		};

		this.translate.onLangChange.subscribe((event: any) => {
			makeGameItems();
		});

		makeGameItems();
    	// 起始代幣
    	this.gameCoinService.addTotalCoin(1000);
	}

	playGame() {
		if (this.gameCoinService.gameCoin.usedCoin > 0) {
			this.gameControllerService.playGame();
		}
		else {
			alert(this.translate.instant('lottery.message.pleaseBetFirst'));
		}
	}

	stopGame() {
		this.gameControllerService.stopGame();
	}

	minusCoin(item) {
		if (this.gameControllerService.gameControl.isStart !== true) {
			this.gameCoinService.minusCoin(item);
		}
	}

	plusCoin(item) {
		if (this.gameControllerService.gameControl.isStart !== true) {
			this.gameCoinService.plusCoin(item);
		}
	}

	calculateStart() {
		this.gameCoinService.calculateStart();
	}

	calculateEnd() {
		this.gameCoinService.calculateEnd();
		this.gameControllerService.setIsGet();
	}

}



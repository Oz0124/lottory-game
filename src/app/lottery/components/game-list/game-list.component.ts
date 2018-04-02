import {Component, OnInit, Input, HostListener} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {GameItem} from '../../model/game-item';
import * as $ from 'jquery';


@Component({
	selector: 'app-game-list',
	templateUrl: './game-list.component.html',
	styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
	
	@Input() list: GameItem[];

	listColumeNumber: number = 7;
	itemContainerWidth: number;
	itemContainerHeight: number;

	constructor(public translate: TranslateService) { }

	ngOnInit() {
		
	}

	ngAfterContentChecked() {
		this.onResize();
	}

	@HostListener("window:resize", [])
	onResize() {
		let gameBoxWidth = $('app-game-list').parent().width();
		let itemWidth = gameBoxWidth / this.listColumeNumber;

		this.list.forEach((item, index) => {
			let offsetTop = 0;
			let offsetBottom = 0;
			let offsetLeft = 0;
			let offsetRight = 0;

			switch(index + 1) {
				case 8:
					offsetLeft = 6 * itemWidth;
					break;
				case 9:
					offsetLeft = 5 * itemWidth;
            		offsetTop = itemWidth;
					break;
				case 10:
					offsetLeft = 4 * itemWidth;
            		offsetTop = 2 * itemWidth;
					break;
				case 11:
					offsetLeft = 3 * itemWidth;
            		offsetTop = 3 * itemWidth;
					break;
				case 12:
					offsetLeft = 2 * itemWidth;
            		offsetTop = 4 * itemWidth;
					break;
				case 13:
					offsetLeft = 1 * itemWidth;
            		offsetTop = 5 * itemWidth;
					break;
				case 14:
					offsetLeft = -1 * itemWidth;
            		offsetTop = 5 * itemWidth;
					break;
				case 15:
					offsetLeft = 4 * itemWidth;
            		offsetTop = 4 * itemWidth;
					break;
				case 16:
					offsetLeft = 2 * itemWidth;
            		offsetTop = 4 * itemWidth;
					break;
				case 17:
            		offsetTop = 4 * itemWidth;
					break;
				case 18:
					offsetLeft = -2 * itemWidth;
            		offsetTop = 4 * itemWidth;
					break;
				case 19:
					offsetLeft = -4 * itemWidth;
            		offsetTop = 4 * itemWidth;
					break;
				case 20:
					offsetLeft = -5 * itemWidth;
            		offsetTop = 3 * itemWidth;
					break;
				case 21:
					offsetLeft = -6 * itemWidth;
            		offsetTop = 2 * itemWidth;
					break;
				case 22:
					break;
				case 23:
					offsetLeft = -1 * itemWidth;
            		offsetTop = -1 * itemWidth;
					break;
				case 24:
					offsetLeft = -2 * itemWidth;
            		offsetTop = -2 * itemWidth;
					break;
				default:
			}

			

			item.itemWidth = itemWidth;
			item.itemHeight = itemWidth;
			item.offsetTop = offsetTop;
			item.offsetBottom = offsetBottom;
			item.offsetLeft = offsetLeft;
			item.offsetRight = offsetRight;
			
		});

		this.itemContainerWidth = gameBoxWidth;
		this.itemContainerHeight = gameBoxWidth;
	}


}

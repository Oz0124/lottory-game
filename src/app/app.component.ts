import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	i18nLanguage: string;
	currentLanguage: string;

	constructor(public translate: TranslateService) {
    	translate.addLangs(['zh-Hant', 'en-US']);
    	translate.setDefaultLang('zh-Hant');
    	translate.use('zh-Hant');
    	this.currentLanguage = '繁體中文';	
	}

	ngOnInit() {
		this.translate.onLangChange.subscribe((event: any) => {
			this.i18nLanguage = this.translate.instant('language');
		});
	}

	useEnglish() {
		this.translate.use('en-US');
		this.currentLanguage = 'English';	
	}
	useChineseTW() {
		this.translate.use('zh-Hant');
		this.currentLanguage = '繁體中文';	
	}

	title = 'app'
}

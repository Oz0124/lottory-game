import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
} from '@angular/material';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// page
import {HeroPageComponentComponent} from './hero-page-component/hero-page-component.component';
import {TodoPageComponentComponent} from './todo-page-component/todo-page-component.component';
import {LotteryPageComponentComponent} from './lottery/lottery-page-component/lottery-page-component.component';
// lottery
import {GameControlComponent} from './lottery/components/game-control/game-control.component';
import {GameItemsComponent} from './lottery/components/game-items/game-items.component';
import {GameListComponent} from './lottery/components/game-list/game-list.component';
// todo


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HeroPageComponentComponent,
        TodoPageComponentComponent,
        LotteryPageComponentComponent,
        GameControlComponent,
        GameItemsComponent,
        GameListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-profile';

  Setup:any = [];

  constructor(
    public translate: TranslateService,
    private serverService: ServerService
  ) {
    translate.addLangs(['en', 'id', 'jp']);
    translate.setDefaultLang('en');
    this.readSetup();
  }

  readSetup(){
    this.serverService.getSetups().subscribe((data) => {
     this.Setup = data;
    })
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

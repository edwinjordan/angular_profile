import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Setup:any = [];

  constructor(
    public translate: TranslateService,
    private serverService: ServerService
  ) {
    translate.addLangs(['en', 'id','jp']);
    translate.setDefaultLang('en');
    this.readSetup_en();
    // if(translate.use('en')){
    //   console.log('asasa');
    //   this.readSetup_en();
    // }else if(translate.use('id')){
    //   this.readSetup();
    // }else{
    //   this.readSetup_jp();
    // }

  }

  readSetup(){
    this.serverService.getSetups().subscribe((data) => {
     this.Setup = data;
    })
  }

  readSetup_en(){
    this.serverService.getSetups_en().subscribe((data) => {
     this.Setup = data;
    })
  }

  readSetup_jp(){
    this.serverService.getSetups_jp().subscribe((data) => {
     this.Setup = data;
    })
  }

  switchLang(lang: string) {
    console.log('lang'+lang);
    this.translate.use(lang);

    if(lang=="en"){
      this.readSetup_en();
    }else if(lang=="id"){
      this.readSetup();
    }else{
      this.readSetup_jp();
    }
  }

  ngOnInit(): void {
  }

}

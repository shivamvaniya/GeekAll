import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage }from '../main/main';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
rgstr : FormGroup;

  constructor(public navCtrl: NavController, public formBuilder : FormBuilder) {
    this.rgstr = this.formBuilder.group({
      uid:['',Validators.pattern('[A-Za-z0-9_]*')],
      pswd:['',Validators.pattern('[A-Za-z0-9@]+')],
      repswd:['',Validators.pattern('[A-Za-z0-9@]+')]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

main(){
  if(this.rgstr.valid){
    this.navCtrl.push(MainPage);
  }
  }
}

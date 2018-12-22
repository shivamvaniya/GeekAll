import { MainPage } from './../main/main';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginvalidate : FormGroup;


  constructor(public navCtrl: NavController,public formBuilder : FormBuilder) {
     this.loginvalidate = this.formBuilder.group({
      user:['',Validators.pattern('[A-Za-z0-9_]*')],
      pswd:['',Validators.pattern('[A-Za-z0-9@]+')]
     });
  }
register(){

this.navCtrl.push(RegisterPage);
}
login(){
  if(this.loginvalidate.valid){
  this.navCtrl.push(MainPage);
  }
}
}


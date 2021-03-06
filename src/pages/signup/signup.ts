import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { Firebase } from '@ionic-native/firebase';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string, phoneNumber : string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test',
    phoneNumber: '9842172009'
  };

  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private firebase: Firebase, private afAuth: AngularFireAuth) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }
  

  signIn(){
    const appVerifier = this.recaptchaVerifier;
    //const phoneNumberString = "+" + phoneNumber;

    this.afAuth.auth.signInWithPhoneNumber("+919842172009", appVerifier)
    .then( confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log(confirmationResult);
  })
  .catch(function (error) {
    console.error("SMS not sent", error);
  });
  
    /*firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
    })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });*/
  
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SignupPage } from './signup';
import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAY4_9moLsRouKzMyZBDkb--5i8N71h96U",
  authDomain: "ucalproject.firebaseapp.com",
  databaseURL: "https://ucalproject.firebaseio.com",
  projectId: "ucalproject",
  storageBucket: "ucalproject.appspot.com",
  messagingSenderId: "204990184677"
};


@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    TranslateModule.forChild(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [Firebase,
    AngularFireDatabase],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule { }

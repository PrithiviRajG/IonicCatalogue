import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { VehicleModelImagePage } from './vehicle-model-image';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
    VehicleModelImagePage,
  ],
  imports: [
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    IonicPageModule.forChild(VehicleModelImagePage),
    TranslateModule.forChild()
  ],
  exports: [
    VehicleModelImagePage
  ]
})
export class VehicleModelImagePageModule { }

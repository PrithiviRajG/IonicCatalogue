import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { VehicleModelPage } from './vehicle-model';

@NgModule({
  declarations: [
    VehicleModelPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleModelPage),
    TranslateModule.forChild()
  ],
  exports: [
    VehicleModelPage
  ]
})
export class VehicleModelPageModule { }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@IonicPage()
@Component({
  selector: 'page-vehicle-model',
  templateUrl: 'vehicle-model-image.html'
})
export class VehicleModelImagePage {
  item: any;
  vehicles : any;

  vehicleData : any = {
    "Two Wheeler" : {
      "Vehicles" : ["Enfield", "Bajaj", "Hero", "Suzuki", "TVS", "Yamaha", "Honda", "Vespa", "Mahindra", "KTM", "Harely Davidson", "Ducati"]
    },
    "Three Wheeler" : {
      "Vehicles" : ["Bajaj", "TVS", "Mahindra", "Piaggio", "Arjun", "Vikram"]
    },
    "Four Wheeler" : {
       "Vehicles" : ["Suzuki", "Mahindra", "Hyundai", "Honda", "VW", "BMW", "MERCEDEZ", "FIAT", "TOYOTA", "TATA", "NISSAN", "DATSUN","RENAULT", "ISUZU", "MITSUBISHI", "VOLVO","FORD","CHEVEROLET"]
    }, 
    "Commercial vehicle" : {
      "Vehicles" : ["Eicher", "Ashok Leyland", "TATA", "Mahindra", "AMW", "BHARAT BENZ", "Force"]
    }
  };

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item');
    this.vehicles = this.vehicleData[this.item].Vehicles;
    console.log(this.item);
  }

}

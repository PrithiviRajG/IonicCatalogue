import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  items = [
    "Two Wheeler", "Three Wheeler", "Four Wheeler", "Commercial vehicle"
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  constructor(public navCtrl: NavController, public itemsProvider: Items, public modalCtrl: ModalController) {
    this.currentItems = this.itemsProvider.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.itemsProvider.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.itemsProvider.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    this.navCtrl.push('VehicleModelPage', {
      item: item
    });
  }
}

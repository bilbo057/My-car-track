// car-edit.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarEditPageRoutingModule } from './car-edit-routing.module';
import { CarEditPage } from './car-edit.page';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarEditPageRoutingModule,
    AngularFirestoreModule,
  ],
  declarations: [CarEditPage],
})
export class CarEditPageModule {}
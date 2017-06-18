import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatePostPage } from './update-post';

@NgModule({
  declarations: [
    UpdatePostPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatePostPage),
  ],
  exports: [
    UpdatePostPage
  ]
})
export class UpdatePostPageModule {}

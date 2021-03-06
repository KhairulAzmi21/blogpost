import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail-post',
  templateUrl: 'detail-post.html',
})
export class DetailPostPage {

  post: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get('posts');
    console.log(this.post);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPostPage');
  }

}

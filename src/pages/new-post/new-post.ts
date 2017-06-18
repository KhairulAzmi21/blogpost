import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the NewPostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  
  post : { title:string, body:string, image: string,some_bool:number}

  constructor(public navCtrl: NavController,public postService: PostProvider,public viewCtrl: ViewController) {
     this.post={title:null,body:null,image:"http://lorempixel.com/gray/640/840/?92624",some_bool:null}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }
  addNewPost(){
    this.postService.addData(this.post);
    this.viewCtrl.dismiss();
  }

}

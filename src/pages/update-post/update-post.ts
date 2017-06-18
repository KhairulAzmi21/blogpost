import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the UpdatePostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update-post',
  templateUrl: 'update-post.html',
})
export class UpdatePostPage {
  oldpost: any;
  post : { title:string,body:string,image:string,some_bool:number}

  constructor(public viewCtrl: ViewController, public navParams: NavParams,public postService: PostProvider) {
      
      this.oldpost = this.navParams.get('post');

      this.post={
          title     :  this.oldpost.title,
          body      :  this.oldpost.body,
          image     :  this.oldpost.image,
          some_bool :  this.oldpost.some_bool
        }
      console.log(this.oldpost);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePostPage');
  }
  updatePost(){
    console.log("ID is "+this.oldpost.id);
    console.log("Update Post "+this.post);
    this.postService.updateData(this.post,this.oldpost.id);

    
    
  }
}

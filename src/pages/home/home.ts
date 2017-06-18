import { Component } from '@angular/core';
import { NavController,ModalController,ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { NewPostPage } from '../new-post/new-post';
import { DetailPostPage } from '../detail-post/detail-post';
import { UpdatePostPage } from '../update-post/update-post';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PostProvider],
})
export class HomePage {

  posts: any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,
  public postService: PostProvider,public toastCtrl: ToastController) {
      this.getPost();
      
  }

  getPost(){
    this.postService.load()
      .then(data => {
        this.posts = data
        console.log(this.posts);
      });

  }
  newPost(){
    let modal = this.modalCtrl.create(NewPostPage);
    
    modal.onDidDismiss(data => {
        console.log("Data new Post "+data)
    });
    modal.present();

  }

  detailPost(post){
    this.navCtrl.push(DetailPostPage,{posts : post});
  }
  editPost(post){
    this.navCtrl.push(UpdatePostPage,{post : post});
  }

  removePost(post){
    console.log("sini nak delete tu");

    var remove = this.postService.deleteData(post.id);

    if(remove){
        let index = this.posts.indexOf(post);
        console.log(index);
        if(index > -1){
           this.posts.splice(index, 1);
        }
    }
  }

  doRefresh(refresher){
      this.postService.load()
        .then(data => {
          this.posts = data
          console.log(this.posts);
        });
      console.log(refresher);
      setTimeout(() => {
      console.log("after "+refresher)
      console.log('Async operation has ended');
      refresher.complete();
      }, 2000);

  }

}

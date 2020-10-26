import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  constructor(public db: AngularFireDatabase, public router: Router, public firebaseService: FirebaseService) { }
  user_id;
  list = [];
  ngOnInit(): void {
    this.readBoard();
  }

  async addList(listtitle) {
    await this.firebaseService.user();
    this.user_id = this.firebaseService.uId;
    this.db.database.ref('/' + this.user_id).push({ listtitle: listtitle });
    this.readBoard();
  }
  async readBoard() {
    var getListDet = [];
    console.log("Reading Boards...");
    await this.firebaseService.user();
    this.user_id = this.firebaseService.uId;
    this.db.database.ref('/' + this.user_id).once('value').then(function (snapshot) {
      snapshot.forEach(childSnap => {
        childSnap.forEach(data => { getListDet.push(data.val()) })
      })
    });
    this.list=getListDet;
    console.log(this.list);
  }


}

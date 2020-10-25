import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board-content',
  templateUrl: './board-content.component.html',
  styleUrls: ['./board-content.component.css']
})
export class BoardContentComponent implements OnInit {
boards=[];
  constructor(public db: AngularFireDatabase, public router: Router, public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.readBoard();
  }

  user_id = 'nwt31y4JSyPcUNkNn3UnwWJFewN2';
  // user_id;
  async addBoard(boardtitle) {
    // await this.firebaseService.user();
    // this.user_id = this.firebaseService.uId;
    this.db.database.ref('/' + this.user_id).push({ boardtitle: boardtitle });
    this.readBoard();
  }

  async readBoard() {
    var getBoardDet = [];
    // console.log(getBoardDet);
    console.log("Reading Boards...");
    // await this.firebaseService.user();
    // this.user_id = this.firebaseService.uId;
    this.db.database.ref('/' + this.user_id).once('value').then(function (snapshot) {
      snapshot.forEach(childSnap => {
        childSnap.forEach(data => { getBoardDet.push(data.val()) })
      })
    });
    this.boards=getBoardDet;
    console.log(this.boards);
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public db: AngularFireDatabase, public router: Router, public firebaseService: FirebaseService) { }
  user_id;
  task = [];
  ngOnInit(): void {
    this.readTask();
  }
  async addTask(title, desc) {
    await this.firebaseService.user();
    this.user_id = this.firebaseService.uId;
    this.db.database.ref('/' + this.user_id).push({ tasktitle: title, taskdesc: desc });
    this.readTask();
  }
  async readTask() {
    var getTaskDet = [];
    console.log("Reading Boards...");
    await this.firebaseService.user();
    this.user_id = this.firebaseService.uId;
    this.db.database.ref('/' + this.user_id).once('value').then(function (snapshot) {
      snapshot.forEach(childSnap => {
        childSnap.forEach(data => { getTaskDet.push(data.val()) })
      })
    });
    this.task=getTaskDet;
    console.log(getTaskDet);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { LoginModule } from './login/login.module';
import { BoardsModule } from './boards/boards.module';
import { FirebaseService } from './services/firebase.service';
import { ListsModule } from './lists/lists.module';
// import { ListsModule } from './lists/lists.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    LoginModule,
    BoardsModule,
    ListsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyApci9QOqxQJY7lvZ_nneygByAnlL2huaY",
      authDomain: "trello-webapp.firebaseapp.com",
      databaseURL: "https://trello-webapp.firebaseio.com",
      projectId: "trello-webapp",
      storageBucket: "trello-webapp.appspot.com",
      messagingSenderId: "932027074586",
      appId: "1:932027074586:web:fa56dff45ccc99799ea9a3"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

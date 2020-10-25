import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-board',
  templateUrl: './home-board.component.html',
  styleUrls: ['./home-board.component.css']
})
export class HomeBoardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}

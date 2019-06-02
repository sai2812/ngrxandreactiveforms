import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../model/tut.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from '../actions/tuts.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials : Observable<Tutorial[]>;
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.tutorials = this.store.select('tutorial');
  }

  delTutorial(index){
    this.store.dispatch(new TutorialActions.Removetutorial(index));
  }
}

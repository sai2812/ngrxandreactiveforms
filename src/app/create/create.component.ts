import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from '../model/tut.model';
import * as TutorialActions from './../actions/tuts.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  addTutorial(name,url){
    this.store.dispatch(new TutorialActions.Addtutorial({name:name,url:url}));

  }
  ngOnInit() {

  }

}

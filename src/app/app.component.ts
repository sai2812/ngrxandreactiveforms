import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenName = ['alem','thom'];

  signUpForm : FormGroup;

  ngOnInit(){

    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }

  

  affhobbies(){
      (<FormArray>this.signUpForm.get('hobbies')).push(new FormControl(null));
  }

  onSubmit(signform : NgForm){
console.log(signform)
  }

  forbiddenNames(control:FormControl) : {[s:string]:boolean} {
    if(this.forbiddenName.indexOf(control.value) !== -1){
      return {'sai':true}
    }
    return null;
  }
}

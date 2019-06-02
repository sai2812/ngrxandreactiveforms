import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from '../model/tut.model';

export const ADD_TUTORIAL = '[TUTORIAL] ADD';
export const REMOVE_TUTORIAL = '[TUTORIAL] REMOVE';

export class Addtutorial implements Action {

    readonly type = ADD_TUTORIAL;
    constructor(public payload: Tutorial) {

    }
}

export class Removetutorial implements Action {

    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: number) {

    }
}

export type Actions = Addtutorial | Removetutorial; 

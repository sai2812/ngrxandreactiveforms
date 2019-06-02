import { Tutorial } from '../app/model/tut.model';

export interface AppState {
  readonly tutorial: Tutorial[];
}
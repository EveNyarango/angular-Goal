import { Goals } from './../goalList';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals;
  }

  getGoal(id){
for (let goal of Goals){
  if (goal.id == id){
    return goal;
  }
}
  }
  constructor() { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScoreBoard, Commentry } from '../interface/bookCricket.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public runs: number = 0;
  public wickets: number = 0;
  public overs: number = 0;
  public balls: number = 0;
  scoreboardObj = {
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0
  }
  commentryObj = []
  private _scoreBoardSub = new BehaviorSubject<ScoreBoard>(this.scoreboardObj);
  readonly scoreBoardSub = this._scoreBoardSub.asObservable();
  private _commentrySub = new BehaviorSubject<Commentry[]>([]);
  readonly commentrySub = this._commentrySub.asObservable();
  constructor() { }

  getProbability(): number {
    return Math.floor(Math.random() * 101); //The maximum is inclusive and the minimum is inclusive 
  }

  updateScoreBoard(score: number, risk: string) {
    this.balls = this.balls + 1;
    if (score < 6) {
      this.runs += score;
    } else {
      this.wickets = this.wickets + 1;
    }
    if (this.balls === 6) {
      this.balls = 0;
      this.overs = this.overs + 1
    } 
    this.scoreboardObj = {
      runs: this.runs,
      wickets: this.wickets,
      overs: this.overs,
      balls: this.balls
    } 
    const commentryObjCopy = {
      risk: risk,
      runs: score < 6 ? score : 0 
    } 
    this.commentryObj.push(commentryObjCopy)
    this._scoreBoardSub.next(Object.assign({}, this.scoreboardObj));
    this._commentrySub.next(this.commentryObj);
  }

}

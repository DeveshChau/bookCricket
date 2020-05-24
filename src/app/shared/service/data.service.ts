import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ScoreBoard, Commentary } from '../interface/bookCricket.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  scoreboardObj = {
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0
  }
  commentaryObj: Commentary = {overs: 0, runs: ''};
  public runs: number = 0;
  public wickets: number = 0;
  public overs: number = 0;
  public balls: number = 0;  
  private _gameOver = new Subject();
  readonly gameOver = this._gameOver.asObservable();
  private _scoreBoardSub = new BehaviorSubject<ScoreBoard>(this.scoreboardObj);
  readonly scoreBoardSub = this._scoreBoardSub.asObservable();
  private _commentarySub = new Subject<Commentary>();
  readonly commentarySub = this._commentarySub.asObservable();
  constructor() { }

  getProbability(): number {
    return Math.floor(Math.random() * 101); //The maximum is inclusive and the minimum is inclusive 
  }

  updateScoreBoard(score: number, risk: string) {  
    this.balls = this.balls + 1;
    if (score < 7) {
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
    this.commentaryObj = {
      overs: this.overs,
      runs: score < 7 ? score.toString(10) : 'W' 
    };
    if (this.wickets === 10) {
      this._gameOver.next(true);
    }
    this._scoreBoardSub.next(Object.assign({}, this.scoreboardObj));
    this._commentarySub.next(this.commentaryObj);
  }
}

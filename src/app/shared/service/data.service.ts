import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ScoreBoard, Commentary, Scorecard } from '../interface/bookCricket.interface';

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
  commentaryObj: Commentary[] = [];
  scorecardObj: Scorecard[] = []
  public runs: number = 0;
  public wickets: number = 0;
  public overs: number = 0;
  public balls: number = 0;
  public ballsFaced: number = 0;
  public runsScored: number = 0;
  private _gameOver = new BehaviorSubject<boolean>(false);
  readonly gameOver = this._gameOver.asObservable();
  private _scoreBoardSub = new BehaviorSubject<ScoreBoard>(this.scoreboardObj);
  readonly scoreBoardSub = this._scoreBoardSub.asObservable();
  private _commentarySub = new BehaviorSubject<Commentary[]>([]);
  readonly commentarySub = this._commentarySub.asObservable();
  constructor() { }

  getProbability(): number {
    return Math.floor(Math.random() * 101); //The maximum is inclusive and the minimum is inclusive 
  }

  updateScoreBoard(score: number) {
    this.balls = this.balls + 1;
    this.ballsFaced = this.ballsFaced + 1;
    if (score < 7) {
      this.runs += score;
      this.runsScored += score;
    } else {
      this.wickets = this.wickets + 1;
      this.scorecardObj.push({
        batsmanNumber: this.wickets,
        runsScored: this.runsScored,
        ballsFaced: this.ballsFaced
      });
      this.ballsFaced = 0;
      this.runsScored = 0;
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
    this.commentaryObj.push({
      overs: this.overs,
      runs: score < 7 ? score.toString(10) : 'W'
    });
    if (this.wickets === 10) {
      this._gameOver.next(true);
    }
    this._scoreBoardSub.next(Object.assign({}, this.scoreboardObj));
    if (this.balls != 0 || this.overs != 0) {
      this._commentarySub.next(this.commentaryObj);
    }
  }

  getScorecard() {
    let scorecardObjCopy: Scorecard[] = [];
    if (this.wickets === 0) {
      scorecardObjCopy = [{
        batsmanNumber: 1,
        runsScored: this.runs,
        ballsFaced: this.ballsFaced
      }]
      return scorecardObjCopy
    }
    if (this.wickets + 1 === this.scorecardObj.slice(-1)[0].batsmanNumber) {
      this.scorecardObj.push(...this.scorecardObj, ...scorecardObjCopy);
    }
    return this.scorecardObj
  }
}

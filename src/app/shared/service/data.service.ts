import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ScoreBoard, Commentary, Partnership, BattingScorecard } from '../model/bookCricket.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  batsmanLineup: BattingScorecard[] = [
    {
      name: 'batsman1',
      runs: 0,
      balls: 0,
      position: 0
    },
    {
      name: 'batsman2',
      runs: 0,
      balls: 0,
      position: 1,
    },
    {
      name: 'batsman3',
      runs: 0,
      balls: 0,
      position: 2
    },
    {
      name: 'batsman4',
      runs: 0,
      balls: 0,
      position: 3
    },
    {
      name: 'batsman5',
      runs: 0,
      balls: 0,
      position: 4
    },
    {
      name: 'batsman6',
      runs: 0,
      balls: 0,
      position: 5
    },
    {
      name: 'batsman7',
      runs: 0,
      balls: 0,
      position: 6
    },
    {
      name: 'batsman8',
      runs: 0,
      balls: 0,
      position: 7
    },
    {
      name: 'batsman9',
      runs: 0,
      balls: 0,
      position: 8
    },
    {
      name: 'batsman10',
      runs: 0,
      balls: 0,
      position: 9
    },
    {
      name: 'batsman11',
      runs: 0,
      balls: 0,
      position: 10
    },
  ]
  currentPair: BattingScorecard[] = [];
  display: BattingScorecard[] = [...this.batsmanLineup];
  striker: BattingScorecard;
  nonStriker: BattingScorecard;
  scoreboardObj = {
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0
  }
  commentaryObj: Commentary[] = [];
  partnershipObj: Partnership[] = []
  public score: number = 0;
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

  generateScore(risk: string) {
    //The maximum is inclusive and the minimum is inclusive 
    const probability = Math.floor(Math.random() * 101);
    switch (risk) {
      case 'low':
        if (probability <= 50) { this.score = 0 }
        else if (probability <= 80) { this.score = 1 }
        else if (probability <= 95) { this.score = 2 }
        else if (probability <= 96) { this.score = 3 }
        else if (probability <= 98) { this.score = 4 }
        else if (probability <= 99) { this.score = 6 }
        else { this.score = 7 }
        this.updateScoreBoard(this.score);
        break;
      case 'mid':
        if (probability <= 33) { this.score = 0 }
        else if (probability <= 68) { this.score = 1 }
        else if (probability <= 80) { this.score = 2 }
        else if (probability <= 82) { this.score = 3 }
        else if (probability <= 90) { this.score = 4 }
        else if (probability <= 96) { this.score = 6 }
        else { this.score = 7 }
        this.updateScoreBoard(this.score);
        break;
      case 'high':
        if (probability <= 14) { this.score = 0 }
        else if (probability <= 18) { this.score = 1 }
        else if (probability <= 27) { this.score = 2 }
        else if (probability <= 31) { this.score = 3 }
        else if (probability <= 66) { this.score = 4 }
        else if (probability <= 90) { this.score = 6 }
        else { this.score = 7 }
        this.updateScoreBoard(this.score);
        break;
      default:
        break;
    }
  }

  updateScoreBoard(score: number) {
    this.balls = this.balls + 1;
    this.ballsFaced = this.ballsFaced + 1;
    if (score < 7) {
      this.runs += score;
      this.runsScored += score;
      this.updateBattingScorecard();
    } else {
      this.updateBattingScorecard();
      this.wickets = this.wickets + 1;
      this.partnershipObj.push({
        partnershipNumber: this.wickets,
        runsScored: this.runsScored,
        ballsFaced: this.ballsFaced
      });
      this.ballsFaced = 0;
      this.runsScored = 0;
    }
    if (this.balls === 6) {
      this.balls = 0;
      this.overs = this.overs + 1
      if (score != 1 && score != 3) {
        const temp = this.striker;
        this.striker = this.nonStriker;
        this.nonStriker = temp;
      }
    }
    this.scoreboardObj = {
      runs: this.runs,
      wickets: this.wickets,
      overs: this.overs,
      balls: this.balls
    }
    if (this.wickets === 3) {
      this._gameOver.next(true);
    }
    this._scoreBoardSub.next(Object.assign({}, this.scoreboardObj));
    this.updateCommentary(score);
  }

  updateCommentary(score: number): void {
    this.commentaryObj.push({
      overs: this.overs,
      runs: score < 7 ? score.toString(10) : 'W'
    });
    this._commentarySub.next(this.commentaryObj);
  }

  getPartnershipCard(): Partnership[] {
    let scorecardObjCopy: Partnership[] = [];
    if (this.wickets === 0) {
      scorecardObjCopy = [{
        partnershipNumber: 1,
        runsScored: this.runs,
        ballsFaced: this.ballsFaced
      }]
      return scorecardObjCopy
    }
    return this.partnershipObj
  }

  getCurrentPartnership(): Partnership[] {
    let scorecardObjCopy: Partnership[] = []
    if (this.wickets > 0 && this.wickets < 10) {
      if (this.wickets === this.partnershipObj.slice(-1)[0].partnershipNumber) {
        scorecardObjCopy = [{
          partnershipNumber: this.wickets + 1,
          runsScored: this.runsScored,
          ballsFaced: this.ballsFaced
        }]
        return scorecardObjCopy;
      }
    }
  }

  getBattingscoreCard(): BattingScorecard[] {
    return this.currentPair;
  }

  updateBattingScorecard() {
    if (this.overs === 0 && this.balls === 1) {
      this.currentPair = this.batsmanLineup.splice(0, 2);
      this.striker = this.currentPair[0];
      this.nonStriker = this.currentPair[1];
      this.batsmanLineup;
    }
    let temp: BattingScorecard;
    switch (this.score) {
      case 1:
        this.striker.runs = this.striker.runs + 1;
        this.striker.balls = this.striker.balls + 1;
        if (this.balls != 6) {
          temp = this.striker;
          this.striker = this.nonStriker;
          this.nonStriker = temp;
        }
        break;
      case 2:
        this.striker.runs = this.striker.runs + 2;
        this.striker.balls = this.striker.balls + 1;
        this.batsmanLineup[0] = this.striker;
        break;
      case 3:
        this.striker.runs = this.striker.runs + 3;
        this.striker.balls = this.striker.balls + 1;
        if (this.balls != 6) {
          temp = this.striker;
          this.striker = this.nonStriker;
          this.nonStriker = temp;
        }
        break;
      case 4:
        this.striker.runs = this.striker.runs + 4;
        this.striker.balls = this.striker.balls + 1;
        break;
      case 6:
        this.striker.runs = this.striker.runs + 6;
        this.striker.balls = this.striker.balls + 1;
        break;
      case 7:
        this.striker.runs = this.striker.runs;
        this.striker.balls = this.striker.balls + 1;
        if (this.striker.name === this.currentPair[0].name) {
          this.currentPair.splice(0, 1)
        } else {
          this.currentPair.splice(1, 1)
        }
        let ddd = this.batsmanLineup.shift()
        this.currentPair.push(ddd)
        if (this.balls != 6) {
          this.striker = this.currentPair[1];
          this.nonStriker = this.currentPair[0];
        } else {
          this.striker = this.currentPair[0];
          this.nonStriker = this.currentPair[1];
        }
        break;
      default:
        this.striker.balls = this.striker.balls + 1;
        break;
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ScoreBoard, Commentary, Partnership, BattingScorecard } from '../model/bookCricket.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  battingTeam: BattingScorecard[] = [
    {
      name: 'batsman1',
      runs: 0,
      balls: 0,
      position: 0,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0

    },
    {
      name: 'batsman2',
      runs: 0,
      balls: 0,
      position: 1,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman3',
      runs: 0,
      balls: 0,
      position: 2,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman4',
      runs: 0,
      balls: 0,
      position: 3,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman5',
      runs: 0,
      balls: 0,
      position: 4,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman6',
      runs: 0,
      balls: 0,
      position: 5,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman7',
      runs: 0,
      balls: 0,
      position: 6,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman8',
      runs: 0,
      balls: 0,
      position: 7,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman9',
      runs: 0,
      balls: 0,
      position: 8,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman10',
      runs: 0,
      balls: 0,
      position: 9,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
    {
      name: 'batsman11',
      runs: 0,
      balls: 0,
      position: 10,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      6: 0
    },
  ];
  battingLineup: BattingScorecard[] = [...this.battingTeam];
  currentPair: BattingScorecard[] = this.battingTeam.splice(0, 2);
  striker: BattingScorecard = this.currentPair[0];
  nonStriker: BattingScorecard = this.currentPair[1];
  scoreboardObj = {
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0
  };
  commentaryObj: Commentary[] = [];
  partnershipObj: Partnership[] = [];
  public score = 0;
  public runs = 0;
  public wickets = 0;
  public overs = 0;
  public balls = 0;
  public ballsFaced = 0;
  public runsScored = 0;
  private gameOver = new BehaviorSubject<boolean>(false);
  readonly gameOverObs = this.gameOver.asObservable();
  private scoreBoardSub = new BehaviorSubject<ScoreBoard>(this.scoreboardObj);
  readonly scoreBoardObs = this.scoreBoardSub.asObservable();
  private commentarySub = new BehaviorSubject<Commentary[]>([]);
  readonly commentaryObs = this.commentarySub.asObservable();
  private currentPairSub = new BehaviorSubject<BattingScorecard[]>(this.currentPair);
  readonly currentPairObs = this.currentPairSub.asObservable();
  constructor() { }

  generateScore(risk: string) {
    // The maximum is inclusive and the minimum is inclusive
    const probability = Math.floor(Math.random() * 101);
    switch (risk) {
      case 'low':
        if (probability <= 50) { this.score = 0; }
        else if (probability <= 80) { this.score = 1; }
        else if (probability <= 95) { this.score = 2; }
        else if (probability <= 96) { this.score = 3; }
        else if (probability <= 98) { this.score = 4; }
        else if (probability <= 99) { this.score = 6; }
        else { this.score = 7; }
        this.updateScoreBoard();
        break;
      case 'mid':
        if (probability <= 33) { this.score = 0; }
        else if (probability <= 68) { this.score = 1; }
        else if (probability <= 80) { this.score = 2; }
        else if (probability <= 82) { this.score = 3; }
        else if (probability <= 90) { this.score = 4; }
        else if (probability <= 96) { this.score = 6; }
        else { this.score = 7; }
        this.updateScoreBoard();
        break;
      case 'high':
        if (probability <= 14) { this.score = 0; }
        else if (probability <= 18) { this.score = 1; }
        else if (probability <= 27) { this.score = 2; }
        else if (probability <= 31) { this.score = 3; }
        else if (probability <= 66) { this.score = 4; }
        else if (probability <= 90) { this.score = 6; }
        else { this.score = 7; }
        this.updateScoreBoard();
        break;
      default:
        break;
    }
  }

  updateScoreBoard() {
    this.balls = this.balls + 1;
    this.ballsFaced = this.ballsFaced + 1;
    if (this.score < 7) {
      this.runs += this.score;
      this.runsScored += this.score;
    } else {
      this.wickets = this.wickets + 1;
      this.partnershipObj.push({
        partnershipNumber: this.wickets,
        runsScored: this.runsScored,
        ballsFaced: this.ballsFaced
      });
      this.runsScored = 0;
      this.ballsFaced = 0;
    }
    if (this.wickets === 10) {
      this.striker.balls += 1;
      this.gameOver.next(true);
    } else {
      this.updateStrikerScorecard();
    }
    if (this.balls === 6) {
      this.balls = 0;
      this.overs += 1;
      if (this.score !== 1 && this.score !== 3) {
        this.strikeChange();
      }
    }
    this.scoreboardObj = {
      runs: this.runs,
      wickets: this.wickets,
      overs: this.overs,
      balls: this.balls
    };
    this.scoreBoardSub.next(Object.assign({}, this.scoreboardObj));
    this.updateCommentary();
  }

  updateCommentary(): void {
    this.commentaryObj.push({
      overs: this.overs,
      runs: this.score < 7 ? this.score.toString(10) : 'W'
    });
    this.commentarySub.next(this.commentaryObj);
  }

  getPartnerships(): Partnership[] {
    let scorecardObjCopy: Partnership[] = [];
    if (this.wickets === 0) {
      scorecardObjCopy = [{
        partnershipNumber: 1,
        runsScored: this.runs,
        ballsFaced: this.ballsFaced
      }];
      return scorecardObjCopy;
    }
    return this.partnershipObj;
  }

  getCurrentPartnership(): Partnership[] {
    let scorecardObjCopy: Partnership[] = [];
    if (this.wickets > 0 && this.wickets < 10) {
      if (this.wickets === this.partnershipObj.slice(-1)[0].partnershipNumber) {
        scorecardObjCopy = [{
          partnershipNumber: this.wickets + 1,
          runsScored: this.runsScored,
          ballsFaced: this.ballsFaced
        }];
        return scorecardObjCopy;
      }
    }
  }

  getBattingScoreCard() {
    return this.battingLineup;
  }

  private updateStrikerScorecard() {
    switch (this.score) {
      case 1:
        this.striker.runs += 1;
        this.striker.balls += 1;
        this.striker[1] += 1;
        if (this.balls !== 6) {
          this.strikeChange();
        }
        break;
      case 2:
        this.striker.runs += 2;
        this.striker.balls += 1;
        this.striker[2] += 1;
        break;
      case 3:
        this.striker.runs += 3;
        this.striker.balls += 1;
        this.striker[3] += 1;
        if (this.balls !== 6) {
          this.strikeChange();
        }
        break;
      case 4:
        this.striker.runs += 4;
        this.striker.balls += 1;
        this.striker[4] += 1;
        break;
      case 6:
        this.striker.runs += 6;
        this.striker.balls += 1;
        this.striker[6] += 1;
        break;
      case 7:
        this.striker.balls += 1;
        if (this.striker.name === this.currentPair[0].name) {
          this.currentPair.splice(0, 1);
        } else {
          this.currentPair.splice(1, 1);
        }
        this.currentPair.push(this.battingTeam.shift());
        if (this.balls !== 6) {
          this.striker = this.currentPair[1];
          this.nonStriker = this.currentPair[0];
        } else {
          this.striker = this.currentPair[0];
          this.nonStriker = this.currentPair[1];
        }
        break;
      default:
        this.striker.balls += 1;
        this.striker[0] += 1;
        break;
    }
    this.currentPairSub.next(this.currentPair);
    this.battingLineup[this.currentPair[0].position] = this.currentPair[0];
    this.battingLineup[this.currentPair[1].position] = this.currentPair[1];
  }

  private strikeChange() {
    const swapVariable = this.striker;
    this.striker = this.nonStriker;
    this.nonStriker = swapVariable;
  }
}

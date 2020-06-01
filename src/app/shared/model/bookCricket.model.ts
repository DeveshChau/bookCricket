export interface ScoreBoard {
    runs: number;
    wickets: number;
    overs: number;
    balls: number;
}
export interface Commentary {
    overs: number;
    runs: string;
}

export interface Partnership {
    partnershipNumber: number;
    runsScored: number;
    ballsFaced: number;
}

export interface BattingScorecard {
    name: string;
    runs: number;
    balls: number;
    position: number;
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    6: number;
}

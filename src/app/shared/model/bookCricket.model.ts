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
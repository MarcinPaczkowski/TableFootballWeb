export interface Player {
    id: number;
    name: string;
    isOnline: boolean;
    lastMatchData: string;
    wonMatchesCounter: number;
    lostMatchesCounter: number;
}

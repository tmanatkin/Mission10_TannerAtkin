export type Bowling = {
    bowlerID: number;
    bowlerFirstName: string;
    bowlerLastName: string;
    bowlerMiddleInit: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    team: {
        teamName: string;
    };
};

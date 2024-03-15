namespace Mission10.Data
{
    public interface IBowlingRepository
    {
        //IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Team> Teams { get; }

        IEnumerable<Bowler> GetBowlerTeams(string[] teamNames);
    }
}

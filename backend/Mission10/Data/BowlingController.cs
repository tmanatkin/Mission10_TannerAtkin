using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Mission10.Data
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository;
        public BowlingController(IBowlingRepository temp)
        {
            _bowlingRepository = temp;
        }

        public IEnumerable<Bowler> Get()
        {
            var bowlingData = _bowlingRepository.GetBowlerTeams(["Marlins", "Sharks"]);
            return bowlingData;
        }
    }
}

using System.Collections.Generic;
using crypto_lab1.Models;
using Microsoft.AspNetCore.Mvc;

namespace crypto_lab1.Controllers {
    [ApiController]
    [Route("/frequency-analysis")]
    public class FrequencyAnalysisController: ControllerBase {
        [HttpPost]
        public Dictionary<char, double> Post([FromBody]IncomingData data) {
            FrequencyAnalizator analizator = new FrequencyAnalizator(data);
            return analizator.createTablePattern();
        }
    }
}
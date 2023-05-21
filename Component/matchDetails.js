class Match {
    constructor() {
      this.page = createDiv().class('matchInfoPage')
    }
  
    display(json) {
      const score=json.score;
      var scoreText1,scoreText2;
      var state1,state2;
      scoreText1 = 0;
       scoreText2 = 0;
       state1 = "Not Started"
       state2 = "Not Started"
      if (score.length === 1) {
        if (score[0]['inning'].substring(0, 4) === json.teams[0].substring(0, 4)) {
          scoreText1 = score[0];
          scoreText2 = {"r":0,"w":0,"o":0};
          state2="Bowling"
          state1="Batting"
        } else {
          scoreText2 = score[0];
          state1="Bowling"
          state2="Batting"
        }
      }else{
        scoreText1 = score[0];
        scoreText2 = score[1];
        state1="Bowling"
        state2="Batting"
      }
      const matchBox = `
        <div class='MIPtext'>
            <center><h2 class="matchName">${json.teams[0]}(${state1}) VS ${json.teams[1]}(${state2})</h2>
              <div class="scoreCardMIP">
              <h2 class="matchName"> <span class="score">${scoreText1["r"]}</span> - Runs - <span class="score">${scoreText2["r"]}</span> </h2>
              <h2 class="matchName"> <span class="score">${scoreText1["w"]}</span> - Wickets Down - <span class="score">${scoreText2["w"]}</span> </h2>
              <h2 class="matchName"> <span class="score">${scoreText1["o"]}</span> - Overs - <span class="score">${scoreText2["o"]}</span> </h2>
              </div>
            </center>
            <div class="infoMIP">
                <h4>Match Name: <small>${json.name}</small></h4>
                <h4>Match Type: <small>${json.matchType}</small></h4>
                <h4>Match Status: <small>${json.status}</small></h4>
                <h4>Match Venue: <small>${json.venue}</small></h4>
                <h4>Match date: <small>${json.date}</small></h4>
                <h4>Match Ended: <small>${json.matchEnded}</small></h4>
            </div>
        </div>
      `;
      this.page.html(matchBox);
      this.page.position(0,0);
    }
  }
  
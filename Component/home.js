class Home {
  constructor() {
    this.ticker = createElement("marquee").class('ticker');
    this.liveMatchArea = createDiv().class('liveMatchArea');
    this.liveMatchHead = createElement("h1").class('liveMatchHead');
    this.matches = [];
    this.liveScoreBoard = createDiv().class('liveScoreBoard container-fluid fixed-bottom');

    this.merchandise = createDiv().class('merchandiseButton');

    this.ticketBook = createDiv().class('ticketBook');

    this.merchandiseText = createButton("Merchandise").class("mtext");
    this.BookTicketText = createButton("Book A Ticket Now!!").class("bttext");

  }

  align() {
    this.ticker.position(0, height / 7.55);
    this.ticker.html("Catch every moment of IPL live with our web app&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Follow your favorite IPL players and teams with our app&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experience IPL like never before with Doofenshmirtz Co.");
    this.ticker.attribute('scrollamount', '12');

    this.liveMatchArea.child(this.liveMatchHead);

    this.merchandise.position(0, height/2.3);
    this.ticketBook.position(width-150, height/2.3);
    this.merchandiseText.position(0,this.merchandise.position().y-this.merchandiseText.width-55)
    this.BookTicketText.position(width-150,this.merchandise.position().y-this.merchandiseText.width-55)

    this.BookTicketText.mouseOver(() => {
      this.BookTicketText.position(width - 160, this.merchandise.position().y-this.merchandiseText.width-55);
    });

    this.BookTicketText.mouseOut(() => {
      this.BookTicketText.position(width - 150,this.merchandise.position().y-this.merchandiseText.width-55);
    });

    this.BookTicketText.mousePressed(()=>{
      alert("Book A Ticket Panel is not in function! ")
    })

    this.merchandiseText.mousePressed(()=>{
      this.liveMatchArea.hide();
        this.merchandise.hide();
        this.ticketBook.hide();
        this.liveScoreBoard.hide();
        this.ticker.hide();
        this.BookTicketText.hide();
        this.merchandiseText.hide();
        merch=new Merchandise();
        merch.display();

    })


    for (let i = 0; i < this.matches.length; i++) {
      const matchButton = createButton("").class('match');
      this.matches[i] = matchButton;
      this.liveMatchArea.child(matchButton);
    }

    this.liveMatchHead.html("Live Matches");

    setTimeout(() => {
      location.reload();
    }, 600000);
  }

  display() {}

  matchInfoFeed(json) {
    console.log(json);

    for (let i = 0; i < json.length && i < this.matches.length; i++) {
      const match = json[i];
      const matchInfoBox = `
        <div class='matchInfoBox'>
          <h7 class='matchText'>
            <b>Name of Match:</b> ${match.name} <br>
            <b>Match Type:</b> ${match.matchType} <br>
            <b>Status:</b> ${match.status}<br>
            <b>Date:</b> ${match.date}<br>
            <b>Match Ended:</b> ${match.matchEnded}
          </h7>
          <p><small>Click here for complete details</small></p>
        </div>
      `;

      this.matches[i].html(matchInfoBox);
      this.matches[i].mousePressed(() => {
        // Handle the button click event here
        this.liveMatchArea.hide();
        this.merchandise.hide();
        this.ticketBook.hide();
        this.liveScoreBoard.hide();
        this.ticker.hide();
        this.BookTicketText.hide();
        this.merchandiseText.hide();
        console.log(`Button ${i + 1} clicked`);
        // Add your logic to navigate to the match details page
        matchInfo = new Match();
        matchInfo.display(match);
      });
    }

    let matchIndex = 0;
    setInterval(() => {
      const match = json[matchIndex];
      const score=match.score;
      var scoreText1,scoreText2;
      scoreText1 = 0;
        scoreText2 = 0;

      if (score.length === 1) {
        if (score[0]['inning'].substring(0, 4) === match.teams[0].substring(0, 4)) {
          scoreText1 = score[0]["r"];
          scoreText2 = 0;
        } else {
          scoreText2 = score[0]["r"];
        }
      }else if(score.length >= 1){
        scoreText1 = score[0]["r"];
        scoreText2 = score[1]["r"];
      }
     
      const matchScoreBox = `
        <center>
          <div class="matchScoreBox">
            <center>
              <h5 style="color:black">Live Score Board <span style="font-size:15px;color:black;">- Match Ended:${match.matchEnded}<span></h5>
            <h4 class="matchName">${match.teams[0]} <span class="score">${scoreText1}</span> VS <span class="score">${scoreText2}</span> ${match.teams[1]}</h4></center>
          </div>
          <div class="batsmanRow">
            <span class="batsman"><b style="font-size:20px">Venue:</b> ${match.venue}</span>
          </div>
        </center>
      `;
      this.liveScoreBoard.html(matchScoreBox);

      matchIndex = (matchIndex + 1) % json.length;
    }, 3000);
  }
}

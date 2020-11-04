const artistContainer = document.getElementById("artistContainer");
const artistSpotlight = document.getElementById("artistSpotlight")

function Artist(name, country, genre, lyrics) {
    this.name = name;    
    this.country = country;
    this.genre = genre;
    this.lyrics = function(lyrics) {
        return lyrics;
    }
}

let Blackpink = new Artist("BLACKPINK", "South Korea", "K-pop");
let BTS = new Artist ("BTS", "South Korea", "K-pop");
let FotC = new Artist("Flight of the Conchords", "New Zealand", "Comedy folk duo");
let VGL = new Artist("Video Games Live", "USA", "Video Game Music");
let CriticalRole = new Artist("Critical Role", "USA", "Video Game Music");


const artistCard1 = document.createElement("p");
artistCard1.innerHTML = Blackpink.name + '<br>' + Blackpink.country + '<br>' + Blackpink.genre + '<br>' + Blackpink.lyrics('<br>' + "♪ " + "보란 듯이 무너졌어" + '<br>' + "바닥을 뚫고 저 지하까지" + '<br>' + "옷 끝자락 잡겠다고"  + '<br>' + "저 높이 두 손을 뻗어봐도" + " ♪");
artistContainer.appendChild(artistCard1);

const artistCard2 = document.createElement("p");
artistCard2.innerHTML = BTS.name + '<br>' + BTS.country + '<br>' + BTS.genre + '<br>' + BTS.lyrics('<br>' + "♪ " + "모든 게 궁금해" + '<br>' + "뭐가 널 행복하게 하는지"  + '<br>' + "내 머리맡에 두고 싶어"  + '<br>' + "네 모든 걸 다 가르쳐줘" + " ♪");
artistContainer.appendChild(artistCard2);

const artistCard3 = document.createElement("p");
artistCard3.innerHTML = FotC.name + '<br>' + FotC.country + '<br>' + FotC.genre + '<br>' + FotC.lyrics('<br>' + "♪ " + "Tears of a rapper" + '<br>' + "I’m crying tears of a rapper" + '<br>' + "Goldplated tears of a rapper" + '<br>' + "The diamond tears of a rapper" + " ♪"); 
artistContainer.appendChild(artistCard3);

const artistCard4 = document.createElement("p");
artistCard4.innerHTML = VGL.name + '<br>' + VGL.country + '<br>' + VGL.genre + '<br>' + VGL.lyrics('<br>' + "♪ " + "[intense musical buildup]" + '<br>' + "[fantastical music]" + '<br>' + "[epic music]" + '<br>' + "[brooding dramatic music]" + " ♪");
artistContainer.appendChild(artistCard4);

const artistCard5 = document.createElement("p");
artistCard5.innerHTML = CriticalRole.name  + '<br>' + CriticalRole.country + '<br>' + CriticalRole.genre + '<br>' + CriticalRole.lyrics('<br>' + "♪ " + "The adventure begins" + '<br>' + "They were always beside you" + '<br>' + "Your nerdy best friends" + '<br>' + "And the DM to guide you"  + " ♪");
artistContainer.appendChild(artistCard5);


let artistArray = new Array;
artistArray.push(Blackpink.name);
artistArray.push(BTS.name);
artistArray.push(FotC.name);
artistArray.push(VGL.name);
artistArray.push(CriticalRole.name);

function randomArtist(artistArray) {
    return artistArray[Math.floor(Math.random()*artistArray.length)];
}

const artistArray2 = document.createElement("p");
artistArray2.innerHTML = randomArtist(artistArray);
artistSpotlight.appendChild(artistArray2);
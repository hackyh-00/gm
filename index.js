const express = require('express');
const app = express();

const musicNames = [
  'Shape of You', 
  'Bohemian Rhapsody', 
  'Billie Jean', 
  'Hey Jude', 
  'Sweet Child o\' Mine',
  'Stairway to Heaven',
  'Like a Rolling Stone',
  'Smells Like Teen Spirit',
  'What\'s Going On',
  'Imagine',
  'Hotel California',
  'I Want to Hold Your Hand',
  'Blowin\' in the Wind',
  'Yesterday',
  'Let It Be',
  'Purple Haze',
  'No Woman, No Cry',
  'Johnny B. Goode',
  'My Generation',
  'Dancing Queen',
  'Good Vibrations',
  'Hallelujah',
  'Every Breath You Take',
  'A Day in the Life',
  'Stand by Me',
  'Papa\'s Got a Brand New Bag',
  'Gimme Shelter',
  'What\'d I Say',
  'My Girl',
  'God Only Knows',
  'Im Just Ken - Ryan Gosling',
  'STAY - The Kid LAROI & Justin Bieber',
  'As It Was - Harry Styles',
  'WAIT FOR U (feat Drake & Tems) - Future',
  'Super Gremlin - Kodak Black',
  'Easy on Me - Adele',
  'Heat Waves - Glass Animals',
  'Cold Heart (PNAU Remix) - Elton John & Dua Lipa',
  'Hiss - Megan Thee Stallion',
  'Yes, And? - Ariana Grande',
  'Lovin on Me - Jack Harlow',
  'Rockin’ Around the Christmas Tree - Brenda Lee',
  'Bad Guy - Billie Eilish',
  'Old Town Road - Lil Nas X',
  'Senorita - Shawn Mendes, Camila Cabello',
  'Lose You to Love Me - Selena Gomez',
  'Dance Monkey - Tones and I',
  'Circles - Post Malone',
  'Memories - Maroon 5',
  '10,000 Hours - Dan + Shay, Justin Bieber',
  'Someone You Loved - Lewis Capaldi',
  'Roxanne - Arizona Zervas',
  'Yummy - Justin Bieber',
  'Blinding Lights - The Weeknd',
  'The Box - Roddy Ricch',
  'Dont Start Now ',
  'Life Is Good - Future ft. Drake',
  'Intentions - Justin Bieber ft. Quavo',
  'Say So - Doja Cat',
  'Adore You - Harry Styles',
  'Toosie Slide - Drake',
  'Blinding Lights - The Weeknd',
  'Savage Love - Jawsh 685, Jason Derulo',
  'Watermelon Sugar - Harry Styles',
  'Rockstar - DaBaby ft. Roddy Ricch',
  'Whats Poppin - Jack Harlow',
  'Cardigan - Taylor Swift',
  'WAP - Cardi B ft. Megan Thee Stallion',
  'Dynamite - BTS',
  'Mood - 24kGoldn ft. iann dior',
  'Positions Ariana Grande',
  'Therefore I Am Billie Eilish',
  'Levitating - Dua Lipa',
  'Peaches - Justin Bieber ft. Daniel Caesar, Giveon',
  'Leave The Door Open - Silk Sonic (Bruno Mars, Anderson .Paak)',
  'Save Your Tears - The Weeknd & Ariana Grande',
  'Kiss Me More - Doja Cat ft. SZA',
  'Montero (Call Me By Your Name) - Lil Nas X',
  'Astronaut In The Ocean - Masked Wolf',
  'Rapstar - Polo G',
  'Without You - The Kid LAROI',
  'Good 4 U - Olivia Rodrigo',
  'Deja Vu - Olivia Rodrigo',
  'Traitor - Olivia Rodrigo',
  'Drivers License - Olivia Rodrigo',
  'Best Friend - Saweetie ft. Doja Cat',
  'Heartbreak Anniversary - Giveon',
  'Beautiful Mistakes - Maroon 5 ft. Megan Thee Stallion',
  'Up - Cardi B',
  'Blame It On You - Jason Aldean',
  'Track Star - Mooski',
  'Forever After All - Luke Combs',
  'Heat Waves - Glass Animals',
  'Go Crazy - Chris Brown & Young Thug',
  'Made For You - Jake Owen',
  'Calling My Phone - Lil Tjay ft. 6LACK',
  'What’s Next - Drake',
  'Breaking Up Was Easy In The 90\'s - Sam Hunt',
  'Hell Of A View - Eric Church',
  'Nobody - Dylan Scott',
  'Glad You Exist - Dan + Shay',
  'Arcade - Duncan Laurence'
];


let sentMusicNames = [];


function selectRandomMusicName() {
  if (sentMusicNames.length === musicNames.length) {
   
    sentMusicNames = [];
  }
  const availableMusicNames = musicNames.filter(name => !sentMusicNames.includes(name));
  const randomIndex = Math.floor(Math.random() * availableMusicNames.length);
  const selectedMusicName = availableMusicNames[randomIndex];
  sentMusicNames.push(selectedMusicName);
  return selectedMusicName;
}


function selectRandomMusicNameFromList() {
  return musicNames[Math.floor(Math.random() * musicNames.length)];
}


app.get('/kshitiz', (req, res) => {

  const randomMusicName = selectRandomMusicName();

 
  const correctOption = Math.random() < 0.5 ? 'A' : 'B';

  
  const decoyMusicName = selectRandomMusicNameFromList();

  
  const response = {
    music_name: randomMusicName,
    options: {
      [correctOption]: randomMusicName,
      [correctOption === 'A' ? 'B' : 'A']: decoyMusicName
    },
    correct_answer: correctOption
  };

  res.json(response);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

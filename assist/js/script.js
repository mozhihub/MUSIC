'use strict';


/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assist/images/poster-1.jpg",
    title: "Tamil Latest Hit Songs |",
    album: "Tamil Latest Hit Songs 2024 ",
    year: 2023.2024,
    artist: " Tamil Latest Hit Songs | Latest Tamil Songs | New Tamil Songs",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/videoplayback%20(1).mp3?alt=media&token=49cc9e20-9cbd-4d42-827a-cb3ae5ba484b",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assist/images/poster-2.jpg",
    title: "Tamil Latest Hit Songs 2024 ",
    album: "Tamil Latest Songs ",
    year: 2024,
    artist: "Tamil Latest Hit Songs 2024",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/videoplayback%20(2).mp3?alt=media&token=8391947d-c00d-43d2-952f-2ecb2570bf25",
  },
  {
    backgroundImage: "./assist/images/poster-3.jpg",
    posterUrl: "./assist/images/poster-3.jpg",
    title: "90's to 2k's kid's couple songs",
    album: "90's to 2k's kid's",
    year: 1990.2024,
    artist: "Tamil 2k vs 90s",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/videoplayback%20(3).mp3?alt=media&token=25aa0479-085d-4e40-8812-e6ac7056f879",
  },
  {
    backgroundImage: "./assist/images/poster-4.jpg",
    posterUrl: "./assist/images/arrahuman.jpeg",
    title: "Ar.Rahuman Hits",
    album: "tamil hits",
    year:2000.2022,
    artist: "Ar.Rahuman",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/arrahuman.mp3?alt=media&token=95027ac0-1613-4e53-8fd6-e99de4987aba",
  },
  {
    backgroundImage: "./assist/images/poster-4.jpg",
    posterUrl: "./assist/images/town.jpeg",
    title: "இரவு நேர பேருந்து பாடல்கள் ",
    album: "tamil mini bus sons",
    year: 2000,
    artist: "tamil mini bus 3",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/tamilmininbus2.mp3?alt=media&token=0986597e-c618-4201-99e0-3e8347d52f33",
  },
  {
    backgroundImage: "./assist/images/poster-4.jpg",
    posterUrl: "./assist/images/90s.jpeg",
    title: "பேருந்து பாடல்கள் ",
    album: "mini bus songs",
    year: 1990,
    artist: "mini bus songs 2",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/minibus2.mp3?alt=media&token=1d901ccf-1d6d-4b24-84db-73c500c99082",
  },
    {
    backgroundImage: "./assist/images/poster-4.jpg",
    posterUrl: "./assist/images/minibus.jpeg",
    title: "பழைய கிராமிய இசை",
    album: "old is gold",
    year: 1990,
    artist: "old os gold",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/oldes.mp3.m4a?alt=media&token=5cf36dc0-e4e7-4dc4-a2ba-cb12b3c92407",
  },
  {
    backgroundImage: "./assist/images/poster-4.jpg",
    posterUrl: "./assist/images/80s.jpeg",
    title: "90-களின் பாடல்கள் ",
    album: "Mini Bus Songs",
    year: 1980,
    artist: "mini bus songs",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/minibussongs.mp3?alt=media&token=c7a493ce-3f86-42d2-ba56-5db251cc9fe0",
  },
  {
    backgroundImage: "./assist/images/poster-4.jpg",
    posterUrl: "./assist/images/Village.jpeg",
    title: "80-களின் பாடல்கள் ",
    album: "Tamil old songs",
    year: 1980,
    artist: "old songs",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/oldsongs.mp3?alt=media&token=eb4006e5-06aa-48da-98d6-e9a2b5e4e4c7",
  },
  {
    backgroundImage: "./assist/images/poster-5.jpg",
    posterUrl: "./assist/images/poster-5.jpg",
    title: "unknown",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/Dhilip_Varman_song_%F0%9F%92%9D_Evergreen_love_hits__Malasian_tamil_romantic.mp3?alt=media&token=c427ad22-c2c5-4fd2-9b4f-2a62f57c575f",
  },
  {
    backgroundImage: "./assist/images/poster-5.jpg",
    posterUrl: "./assist/images/poster-5.jpg",
    title: "unknown",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/hiphop.mp3?alt=media&token=c83ca619-ceb3-4818-babf-0de28f575bf4",
  },
  {
    backgroundImage: "./assist/images/poster-5.jpg",
    posterUrl: "./assist/images/poster-5.jpg",
    title: "unknown",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/%CA%9F%E1%B4%8F%E1%B4%A0%E1%B4%87_s%E1%B4%8F%C9%B4%C9%A2s_%E1%B4%8A%E1%B4%9C%E1%B4%8B%E1%B4%87%CA%99%E1%B4%8Fx_s%E1%B4%9B%E1%B4%87%E1%B4%98%CA%9C%E1%B4%87%C9%B4_%E1%B4%A2%E1%B4%87%E1%B4%84%CA%9C%E1%B4%80%CA%80%C9%AA%E1%B4%80%CA%9C_s%E1%B4%8F%C9%B4%C9%A2s_%23_%23lovesongs_%23.mp3?alt=media&token=9126d52d-6172-4fee-a722-5d9ec0f9af42",
  },
  {
    backgroundImage: "./assist/images/poster-5.jpg",
    posterUrl: "./assist/images/poster-5.jpg",
    title: "unknown",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/%CA%9F%E1%B4%8F%E1%B4%A0%E1%B4%87_s%E1%B4%8F%C9%B4%C9%A2s_%E1%B4%8A%E1%B4%9C%E1%B4%8B%E1%B4%87%CA%99%E1%B4%8Fx_s%E1%B4%9B%E1%B4%87%E1%B4%98%CA%9C%E1%B4%87%C9%B4_%E1%B4%A2%E1%B4%87%E1%B4%84%CA%9C%E1%B4%80%CA%80%C9%AA%E1%B4%80%CA%9C_s%E1%B4%8F%C9%B4%C9%A2s_%23_%23lovesongs_%23.mp3?alt=media&token=9126d52d-6172-4fee-a722-5d9ec0f9af42",
  },
  {
    backgroundImage: "./assist/images/poster-5.jpg",
    posterUrl: "./assist/images/poster-5.jpg",
    title: "unknown",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/%CA%9F%E1%B4%8F%E1%B4%A0%E1%B4%87_s%E1%B4%8F%C9%B4%C9%A2s_%E1%B4%8A%E1%B4%9C%E1%B4%8B%E1%B4%87%CA%99%E1%B4%8Fx_s%E1%B4%9B%E1%B4%87%E1%B4%98%CA%9C%E1%B4%87%C9%B4_%E1%B4%A2%E1%B4%87%E1%B4%84%CA%9C%E1%B4%80%CA%80%C9%AA%E1%B4%80%CA%9C_s%E1%B4%8F%C9%B4%C9%A2s_%23_%23lovesongs_%23.mp3?alt=media&token=9126d52d-6172-4fee-a722-5d9ec0f9af42",
  },
  {
    backgroundImage: "./assist/images/poster-5.jpg",
    posterUrl: "./assist/images/poster-5.jpg",
    title: "unknown",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/%CA%9F%E1%B4%8F%E1%B4%A0%E1%B4%87_s%E1%B4%8F%C9%B4%C9%A2s_%E1%B4%8A%E1%B4%9C%E1%B4%8B%E1%B4%87%CA%99%E1%B4%8Fx_s%E1%B4%9B%E1%B4%87%E1%B4%98%CA%9C%E1%B4%87%C9%B4_%E1%B4%A2%E1%B4%87%E1%B4%84%CA%9C%E1%B4%80%CA%80%C9%AA%E1%B4%80%CA%9C_s%E1%B4%8F%C9%B4%C9%A2s_%23_%23lovesongs_%23.mp3?alt=media&token=9126d52d-6172-4fee-a722-5d9ec0f9af42",
  },
  {
    backgroundImage: "./assist/images/poster-5.jpg",
    posterUrl: "./assist/images/poster-5.jpg",
    title: "unknown",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/%CA%9F%E1%B4%8F%E1%B4%A0%E1%B4%87_s%E1%B4%8F%C9%B4%C9%A2s_%E1%B4%8A%E1%B4%9C%E1%B4%8B%E1%B4%87%CA%99%E1%B4%8Fx_s%E1%B4%9B%E1%B4%87%E1%B4%98%CA%9C%E1%B4%87%C9%B4_%E1%B4%A2%E1%B4%87%E1%B4%84%CA%9C%E1%B4%80%CA%80%C9%AA%E1%B4%80%CA%9C_s%E1%B4%8F%C9%B4%C9%A2s_%23_%23lovesongs_%23.mp3?alt=media&token=9126d52d-6172-4fee-a722-5d9ec0f9af42",
  },
  {
    backgroundImage: "./assist/images/poster-5.jpg",
    posterUrl: "./assist/images/poster-5.jpg",
    title: "unknown",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/storage-b08d5.appspot.com/o/%CA%9F%E1%B4%8F%E1%B4%A0%E1%B4%87_s%E1%B4%8F%C9%B4%C9%A2s_%E1%B4%8A%E1%B4%9C%E1%B4%8B%E1%B4%87%CA%99%E1%B4%8Fx_s%E1%B4%9B%E1%B4%87%E1%B4%98%CA%9C%E1%B4%87%C9%B4_%E1%B4%A2%E1%B4%87%E1%B4%84%CA%9C%E1%B4%80%CA%80%C9%AA%E1%B4%80%CA%9C_s%E1%B4%8F%C9%B4%C9%A2s_%23_%23lovesongs_%23.mp3?alt=media&token=9126d52d-6172-4fee-a722-5d9ec0f9af42",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);

/**
 * PLAY MUSIC
 * 
 
 * play and pause music when click on play button
 */
const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);

 
/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);


function shuffleArray(array) {
  const shuffled = array.slice(); // copy array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);

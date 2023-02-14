import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
    

player.on('timeupdate', throttle( playTime, 1000));

player.on('loaded', playFromCurrent);

function playTime(recordedTime) {
    localStorage.setItem(LOCAL_STORAGE_KEY, recordedTime.seconds);
}

function playFromCurrent() {
    player.setCurrentTime(currentTime);
}


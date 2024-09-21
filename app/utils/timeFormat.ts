export const timeFormat = (currentTime) =>{
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    minutes = minutes < 10 ? 0 + minutes : minutes;
    seconds = seconds < 10 ? 0 + seconds : seconds;
    const formatTime = minutes + ':' + Math.floor(seconds);
    return formatTime
}
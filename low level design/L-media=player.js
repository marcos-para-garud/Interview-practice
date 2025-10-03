class MediaPlayer {
    playMedia() {
        console.log("error playing media");
    }
}

class AudioPlayer extends MediaPlayer {
    playAudio() {
        console.log("Playing audio...");
    }
}
class VideoPlayer extends MediaPlayer {
    playVideo() {
        console.log("Playing video...");
    }   
}
class StreamingPlayer extends MediaPlayer {
    streamContent() {
        console.log("Streaming content...");
    }
}
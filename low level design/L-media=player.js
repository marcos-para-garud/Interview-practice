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










// 🎯 Problem Statement

// We’re designing a Media Player app that can play Audio and Video files.

// Later, we might add StreamingAudio, StreamingVideo, or even LiveRadio.

// We must ensure that any subclass of MediaPlayer can replace its parent without breaking functionality.

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

class StreamingAudio extends AudioPlayer {
    streamAudio() {
        console.log("Streaming audio...");
    }
}

class StreamingVideo extends VideoPlayer {
    streamVideo() {
        console.log("Streaming video...");
    }
}

class LiveRadio extends AudioPlayer {
    playLiveRadio() {
        console.log("Playing live radio...");
    }
}

// Usage
const audioPlayer = new AudioPlayer();
audioPlayer.playAudio(); // Playing audio...

const videoPlayer = new VideoPlayer();
videoPlayer.playVideo(); // Playing video...

const streamingAudio = new StreamingAudio();
streamingAudio.streamAudio(); // Streaming audio...

const streamingVideo = new StreamingVideo();
streamingVideo.streamVideo(); // Streaming video...

const liveRadio = new LiveRadio();
liveRadio.playLiveRadio(); // Playing live radio...
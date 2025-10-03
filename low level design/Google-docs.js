// 1. The Problem

// You want to create a Text Editor where users can insert different types of content:

// Text

// Images

// Later, you want to extend it with more features:

// Videos

// Tables

// Charts, etc.

// 👉 The challenge: If we use if/else checks for every content type, we will constantly modify existing code when adding a new type (bad design, violates OCP).

// 2. The Goal

// The editor should be scalable → we can add new content types without editing the main logic.

// Use OCP: Open for extension, closed for modification.

// A good fit for this: Strategy Pattern + Polymorphism.




class TextElement {
    constructor(content) {
        this.content = content;
    }
    render() {
        console.log(`Rendering text: ${this.content}`);
    }
}

class ImageElement {
    constructor(src) {
        this.src = src;
    }

    render() {
        console.log(`Rendering image: ${this.src}`);
    }
}

class VideoElement {
    constructor(src) {
        this.src = src;
    }

    render() {
        console.log(`Rendering video: ${this.src}`);
    }
}
class TableElement {
    constructor(data) {
        this.data = data;
    }

    render() {
        console.log(`Rendering table with data: ${JSON.stringify(this.data)}`);
    }
}

class Editor {
    constructor() {
        this.element = [];
    }

    addElement(element){
        this.element.push(element);
    }

    render() {
        this.element.forEach(el => el.render());
    }
}

const editor = new Editor();
editor.addElement(new TextElement("Hello, world!"));
editor.addElement(new ImageElement("image.png"));
editor.addElement(new VideoElement("video.mp4"));
editor.addElement(new TableElement([[1,2,3],[4,5,6]]));
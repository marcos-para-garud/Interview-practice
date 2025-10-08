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
        this.elements = [];
    }

    addElement(element){
        this.elements.push(element);
    }

    render() {
        this.elements.forEach(el => el.render());
    }
}

const editor = new Editor();
editor.addElement(new TextElement("Hello, world!"));
editor.addElement(new ImageElement("image.png"));
editor.addElement(new VideoElement("video.mp4"));
editor.addElement(new TableElement([[1,2,3],[4,5,6]]));









// 🚩 Problem Statement (Google Docs – SOLID Principle Practice)

// You are designing a Google Docs–like editor that supports multiple types of content:

// Text

// Images

// Tables

// (Later, new types like Videos or Charts may be added)

// You need to design the system following SOLID principles, especially focusing on clean extensibility and modularity.

// 🧩 Requirements

// The system should allow a user to add different types of document elements (text, image, table, etc.).

// Each element should know how to render itself.

// You should be able to add new element types (like VideoElement, ChartElement) without modifying existing classes.

// The document should have an export feature (e.g., to PDF or HTML).

// Each class should have a single responsibility (no “God classes”).

// Show how you’d follow Liskov Substitution — i.e., you can treat all elements polymorphically.

// Add a Renderer or DocumentManager that manages all elements and calls their respective methods.

// (Bonus): Implement a DocumentStorage class that saves documents — you can choose to use constructor or dependency injection.

// 🎯 Expected from your solution

// Use ES6 classes (JavaScript).

// Apply SRP, OCP, LSP, ISP, DIP in your structure.

// Include a short comment above each class showing which SOLID principle it relates to.

// Print example usage — e.g., add elements → render document → export to PDF.


// solution

// class Editor {
//     result() {
//         console.log("Document Rendered");
//     }
// }

// class TextElement  {
//     textEditor() {
//         console.log("Text Element Rendered");
//     }
// }

// class ImageElement {
//     imageEditor() {
//         console.log("Image Element Rendered");
//     }
// }

// class TableElement {
//     tableEditor() {
//         console.log("Table Element Rendered");
//     }
// }


class TextElement {
    render() {
        console.log("Text Element Rendered");
    }
}

class ImageElement {
    render() {
        console.log("Image Element Rendered");
    }
}

class TableElement {
    render() {
        console.log("Table Element Rendered");
    }
}
class DocumentManager {
    constructor() {
        this.elements = [];
    }

    addElement(element) {
        this.elements.push(element);
    }

    renderDocument() {
        this.elements.forEach(el => el.render());
    }
}
class DocumentStorage {
    saveDocument(document) {
        console.log("Document saved to database");
    }       
}

const docManager = new DocumentManager();
docManager.addElement(new TextElement());
docManager.addElement(new ImageElement());
docManager.addElement(new TableElement());
docManager.renderDocument();

const storage = new DocumentStorage();
storage.saveDocument(docManager);


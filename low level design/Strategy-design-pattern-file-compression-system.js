
/***
 * 📌 Problem Statement

You are designing a File Compression System for a cloud storage application.

Different users want to compress files using different algorithms based on their needs.

❌ Constraints (Important)

❌ Do NOT use large if-else or switch blocks to decide compression type

❌ Do NOT create subclasses like
ZipCompressor, RarCompressor, SevenZipCompressor that extend a base FileProcessor

✅ Follow SOLID principles

✅ Compression algorithm should be changeable at runtime

✅ Requirements
1️⃣ Compression Strategies

Design separate compression strategies for:

ZIP compression

RAR compression

7z compression

Each strategy should:

Implement a compress(file) method

2️⃣ Context Class

Create a FileCompressor class that:

Accepts a compression strategy via constructor

Delegates compression to the strategy

Exposes a method like:

compressFile(file)


Allows changing the compression strategy at runtime

3️⃣ Demonstration

Show:

Compressing a file using ZIP

Switching strategy to RAR at runtime

Compressing again using 7z

🛠 Expected Output (example)
Compressing report.pdf using ZIP
Compressing report.pdf using RAR
Compressing report.pdf using 7z

🎯 What I’ll Evaluate (Like an Interviewer)

Correct use of Strategy Pattern

No conditional logic for algorithm selection

Proper use of composition

Clean delegation

Runtime strategy switching

Readable, extensible code

👉 Your Turn

Write the JavaScript implementation for this problem.

After you paste your solution, I will:

Review it like an interviewer

Point out improvements

Ask follow-up design questions (OCP, LSP, extensions)

Take your time — write it clean 💪
 */




class Zip {
    compress(file) {
        console.log("Zip Compression:", file);
    }
}
class Rar {
    compress(file) {
        console.log("RAR Compression:", file);
    }
}
class _7Z {
    compress(file) {
        console.log("7z Compression:", file);
    }
}

class FileCompressor {
    constructor(compressType)
    {
        this.compressType = compressType;
    }
    compressing(file)
    {
        this.compressType.compress(file);
    }
}
const zip = new Zip();
const rar = new Rar();
const _7z = new _7Z();
const fileCompressor1 = new FileCompressor(zip);
fileCompressor1.compressing("report.pdf");
const fileCompressor2 = new FileCompressor(rar);
fileCompressor2.compressing("report.pdf");
// Talk behaviors
class SimpleTalk {
  talk() { console.log("Hello, I can talk!"); }
}

class NoTalk {
  talk() { console.log("This robot cannot talk."); }
}

// Walk behaviors
class NormalWalk {
  walk() { console.log("Walking on ground..."); }
}

class NoWalk {
  walk() { console.log("This robot cannot walk."); }
}

// Fly behaviors
class JetFly {
  fly() { console.log("Flying with jet engines!"); }
}

class NoFly {
  fly() { console.log("This robot cannot fly."); }
}

// Projection behaviors
class LaserProjection {
  project() { console.log("Projecting laser beams!"); }
}

class NoProjection {
  project() { console.log("This robot cannot project."); }
}


class Robot {
  constructor(talkBehavior, walkBehavior, flyBehavior, projectionBehavior) {
    this.talkBehavior = talkBehavior;
    this.walkBehavior = walkBehavior;
    this.flyBehavior = flyBehavior;
    this.projectionBehavior = projectionBehavior;
  }

  performTalk() {
    this.talkBehavior.talk();
  }

  performWalk() {
    this.walkBehavior.walk();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performProject() {
    this.projectionBehavior.project();
  }

  // Bonus: we can change behavior at runtime!
  setTalkBehavior(newTalk) { this.talkBehavior = newTalk; }
}


// A humanoid robot (talk + walk only)
const humanoid = new Robot(new SimpleTalk(), new NormalWalk(), new NoFly(), new NoProjection());
humanoid.performTalk();   // Hello, I can talk!
humanoid.performWalk();   // Walking on ground...
humanoid.performFly();    // This robot cannot fly.

// A drone robot (fly + project only)
const drone = new Robot(new NoTalk(), new NoWalk(), new JetFly(), new LaserProjection());
drone.performFly();       // Flying with jet engines!
drone.performProject();   // Projecting laser beams!

// Change behavior at runtime
drone.setTalkBehavior(new SimpleTalk());
drone.performTalk();      // Hello, I can talk!

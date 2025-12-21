/***
 * 📌 Problem Statement

You are designing a robot control system where different robots can have different capabilities such as:

Talking

Walking

Flying

Projecting (laser, hologram, etc.)

Not all robots support all capabilities.

❌ Constraints (Very Important)

You must NOT use deep inheritance like:

class FlyingTalkingWalkingRobot extends Robot {}


You must NOT use large if-else or switch blocks inside the robot.

The system should follow SOLID principles.

Behaviors should be changeable at runtime.

✅ Requirements

Each capability (talk, walk, fly, project) should be modeled as a separate behavior.

A Robot class should:

Delegate actions to these behaviors.

Not know the internal implementation of any behavior.

Robots should be able to:

Talk, walk, fly, or project if they support it.

Gracefully handle unsupported actions.

Behavior should be replaceable at runtime (e.g., a drone learns how to talk).

🛠 Tasks

Design behavior classes for:

Talk behavior

Walk behavior

Fly behavior

Projection behavior

Implement a Robot class that:

Accepts these behaviors via constructor

Delegates calls using methods like:

performTalk()

performWalk()

performFly()

performProject()

Demonstrate:

A humanoid robot (talk + walk only)

A drone robot (fly + project only)

Changing behavior at runtime
 */

















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









// REVISION


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Talk {
    talking()
    {
        console.log("A Talking Robot");
    }
}
class Walk {
    walking()
    {
        console.log("A Talking Robot");
    }
}
class Fly {
    flying()
    {
        console.log("A Flying Robot");
    }
}
class Projection {
    projection()
    {
        console.log("A Projected Robot");
    }
}
class Robot {
    constructor(talk , walk , fly , project)
    {
        this.talk = talk;
        this.walk = walk;
        this.fly = fly;
        this.project = project;
    }
    talkFunction()
    {
        this.talk.talking();
    }
    walkFunction()
    {
        this.walk.walking();
    }
    flyFunction()
    {
        this.fly.flying();
    }
    projectFunction()
    {
        this.project.projection();
    }
}

const talk = new Talk();
const walk = new Walk();
const fly = new Fly();
const project = new Projection();

const robot1 = new Robot(talk , walk , fly , project);
robot1.talkFunction();
robot1.walkFunction();

const robot2 = new Robot(talk , walk , fly , project);
robot2.flyFunction();
robot2.projectFunction();


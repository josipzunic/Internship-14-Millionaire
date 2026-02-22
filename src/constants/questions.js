class Question {
  constructor(id, question, answers) {
    this.id = id;
    this.question = question;
    this.answers = answers;
  }
}

export const questions = [
  new Question(1, "Which planet in our solar system has the shortest year?", [
    { answer: "Venus", isCorrect: false },
    { answer: "Earth", isCorrect: false },
    { answer: "Mercury", isCorrect: true },
    { answer: "Mars", isCorrect: false },
  ]),

  new Question(
    2,
    "What is the escape velocity from Earth (velocity needed to escape Earth's gravitational influence)?",
    [
      { answer: "7.9 km/s", isCorrect: false },
      { answer: "11.2 km/s", isCorrect: true },
      { answer: "15 km/s", isCorrect: false },
      { answer: "22 km/s", isCorrect: false },
    ],
  ),

  new Question(3, "What force keeps planets in orbit around the Sun?", [
    { answer: "Magnetism", isCorrect: false },
    { answer: "Gravity", isCorrect: true },
    { answer: "Solar wind pressure", isCorrect: false },
    { answer: "Dark energy", isCorrect: false },
  ]),

  new Question(4, "What is the name of our galaxy?", [
    { answer: "Andromeda Galaxy", isCorrect: false },
    { answer: "Whirlpool Galaxy", isCorrect: false },
    { answer: "Milky Way Galaxy", isCorrect: true },
    { answer: "Sombrero Galaxy", isCorrect: false },
  ]),

  new Question(5, "How long does light take to travel from the Sun to Earth?", [
    { answer: "About 4 minutes", isCorrect: false },
    { answer: "About 8 minutes", isCorrect: true },
    { answer: "About 12 minutes", isCorrect: false },
    { answer: "Instantly", isCorrect: false },
  ]),

  new Question(
    6,
    "What happens to your orbital speed if you move to a higher circular orbit?",
    [
      { answer: "It increases", isCorrect: false },
      { answer: "It decreases", isCorrect: true },
      { answer: "It stays the same", isCorrect: false },
      { answer: "It becomes zero", isCorrect: false },
    ],
  ),

  new Question(7, "Which planet is known as the Red Planet?", [
    { answer: "Jupiter", isCorrect: false },
    { answer: "Saturn", isCorrect: false },
    { answer: "Mars", isCorrect: true },
    { answer: "Neptune", isCorrect: false },
  ]),

  new Question(8, "What is the largest planet in our solar system?", [
    { answer: "Saturn", isCorrect: false },
    { answer: "Jupiter", isCorrect: true },
    { answer: "Neptune", isCorrect: false },
    { answer: "Earth", isCorrect: false },
  ]),

  new Question(
    9,
    "In orbit, if you want to catch up to a spacecraft ahead of you, you should?",
    [
      { answer: "Speed up directly toward it", isCorrect: false },
      { answer: "Fire thrusters sideways", isCorrect: false },
      { answer: "Lower your orbit first", isCorrect: true },
      { answer: "Turn off gravity", isCorrect: false },
    ],
  ),

  new Question(10, "What is the approximate speed of light in vacuum?", [
    { answer: "300 000 km/s", isCorrect: true },
    { answer: "150 000 km/s", isCorrect: false },
    { answer: "3000 km/s", isCorrect: false },
    { answer: "30 000 km/s", isCorrect: false },
  ]),

  new Question(
    11,
    "What phenomenon causes time to pass slower near massive objects?",
    [
      { answer: "Time dilation", isCorrect: true },
      { answer: "Quantum tunneling", isCorrect: false },
      { answer: "Fusion", isCorrect: false },
      { answer: "Inertia", isCorrect: false },
    ],
  ),

  new Question(12, "What is the name of the first artificial satellite?", [
    { answer: "Explorer 1", isCorrect: false },
    { answer: "Sputnik 1", isCorrect: true },
    { answer: "Apollo 1", isCorrect: false },
    { answer: "Voyager 1", isCorrect: false },
  ]),

  new Question(
    13,
    "Which law describes the relationship between orbital period and distance from the Sun?",
    [
      { answer: "Newton's First Law", isCorrect: false },
      { answer: "Kepler's Third Law", isCorrect: true },
      { answer: "Ohm's Law", isCorrect: false },
      { answer: "Hooke's Law", isCorrect: false },
    ],
  ),

  new Question(
    14,
    "If Earth suddenly stopped orbiting the Sun but kept its current velocity direction, it would:",
    [
      { answer: "Fly off in a straight line", isCorrect: true },
      { answer: "Fall straight into the Sun", isCorrect: false },
      { answer: "Stop instantly", isCorrect: false },
      { answer: "Explode immediately", isCorrect: false },
    ],
  ),

  new Question(15, "What protects Earth from most harmful solar radiation?", [
    { answer: "The Moon", isCorrect: false },
    { answer: "The magnetosphere", isCorrect: true },
    { answer: "Clouds", isCorrect: false },
    { answer: "The ozone hole", isCorrect: false },
  ]),

  new Question(16, "Why do astronauts feel weightless in orbit?", [
    { answer: "There is no gravity in space", isCorrect: false },
    { answer: "They are beyond Earth's gravity", isCorrect: false },
    { answer: "They are in continuous free fall", isCorrect: true },
    { answer: "Space has no mass", isCorrect: false },
  ]),

  new Question(17, "What year was the Apollo 11 Moon landing", [
    { answer: "1969", isCorrect: true },
    { answer: "1970", isCorrect: false },
    { answer: "1971", isCorrect: false },
    { answer: "1972", isCorrect: false },
  ]),

  new Question(
    18,
    "Positions in space where the gravitational forces of a two-body system like the Sun and Earth produce enhanced regions of attraction and repulsion are called.",
    [
      { answer: "Lagrange points", isCorrect: true },
      { answer: "Euler points", isCorrect: false },
      { answer: "Newton points", isCorrect: false },
      { answer: "Kepler points", isCorrect: false },
    ],
  ),

  new Question(
    19,
    "How long is a synodic day on Earth?",
    [
      { answer: "24 hours", isCorrect: true },
      { answer: "25 hours", isCorrect: false },
      { answer: "26 hours", isCorrect: false },
      { answer: "27 hours", isCorrect: false },
    ],
  ),

  new Question(
    20,
    "What is the average distance between Earth and the Sun",
    [
      { answer: "100 million km", isCorrect: false },
      { answer: "150 million km", isCorrect: true },
      { answer: "200 million km", isCorrect: false },
      { answer: "250 million km", isCorrect: false },
    ],
  ),
];

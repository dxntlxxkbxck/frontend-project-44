import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getRoundData = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const progression = getProgression(start, step, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runGame(description, getRoundData);
};

export default runProgressionGame;

export const getRandomArrayElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const removeTwoAnswers = (array) => {
  const correctAnswer = array.find((element) => element.isCorrect === true);
  const newArray = array.filter((element) => element !== correctAnswer);
  const otherRemainingElement = getRandomArrayElement(newArray);

  return [correctAnswer, otherRemainingElement];
};

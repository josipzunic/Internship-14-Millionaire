export const getRandomArrayElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const newArray = [];
  const sizes = [19, 20, 34];

  for (let i = 0; i < 3; i += 1) {
    newArray.push(new ClassRoom(sizes[i]));
  }
  return newArray;
};

export default initializeRooms;

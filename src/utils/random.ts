import { VECTOR } from "@/three/type";

const randomVector = (min: number = 0, max: number = 10): VECTOR => {
  const arr: VECTOR = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    arr[i] = randomNum;
  }
  return arr;
};
export default randomVector;

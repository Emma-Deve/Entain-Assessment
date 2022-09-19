import {getCountDown} from "./getCountDown";

interface IProps {
  timeRemaining: number;
  expected: string;
}
const testArray = [
  { timeRemaining: 3900, expected: "1h 5m 0s" },
  {
    timeRemaining: 580,
    expected: "9m 40s",
  },
  {
    timeRemaining: 45,
    expected: "45s",
  },
  {
    timeRemaining: -30,
    expected: "-30s",
  },
  {
    timeRemaining: -90,
    expected: "",
  },
];

describe.each(testArray)("getCountDown", ({ timeRemaining,  expected }: IProps) => {
  test(`test ${timeRemaining}`, () => {
    expect(getCountDown(timeRemaining)).toBe(expected);
  });
});

import { swapArrayElements } from "../ArrayHelpers";

describe("Array Helper", () => {
  it("should return the correct array with swaped indexes", () => {
    const array = [
      {
        key: "1",
        title: "Post 1",
      },
      {
        key: "2",
        title: "Post 2",
      },
      {
        key: "3",
        title: "Post 3",
      },
      {
        key: "4",
        title: "Post 4",
      },
      {
        key: "5",
        title: "Post 5",
      },
    ];
    const resultArray = [
      {
        key: "2",
        title: "Post 2",
      },
      {
        key: "1",
        title: "Post 1",
      },

      {
        key: "3",
        title: "Post 3",
      },
      {
        key: "4",
        title: "Post 4",
      },
      {
        key: "5",
        title: "Post 5",
      },
    ];

    const functionResult = swapArrayElements(array, 0, 1);

    expect(functionResult).toEqual(resultArray);
  });
});

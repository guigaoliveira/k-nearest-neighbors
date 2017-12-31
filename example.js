const { classify } = require(".");
console.log(
  classify(
    {
      data: [0, 1, 0]
    },
    [
      {
        data: [2, 0, 0],
        type: "CLASS1"
      },
      {
        data: [1, 0, 0],
        type: "CLASS2"
      }
    ]
  )
);

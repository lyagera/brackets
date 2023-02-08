module.exports = function check(str, bracketsConfig) {
  // console.log(str);
  // console.log(bracketsConfig);
  let arr = str.split("");
  // console.log(arr.length);
  while (arr.length > 0) {
    let test;
    let count = 0;
    let indTest;
    if (arr.length === 1) {
      return false;
    }

    for (let i = 0; i < arr.length; i++) {
      let ind = arr[i];
      let indCount = 0;
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (ind === "|" || ind === "7" || ind === "8") {
          indTest = ind;
          break;
        } else if (ind === bracketsConfig[j][0]) {
          indTest = bracketsConfig[j][1];
        }
      }
      for (let j = 0; j < bracketsConfig.length; j++) {
        ind = arr[i + 1];
        if (ind === indTest) {
          break;
        } else if (ind === bracketsConfig[j][0]) {
          indTest = bracketsConfig[j][1];
          indCount += 1;
          break;
        }
      }
      if (indCount === 0) {
        if (ind === indTest) {
          arr.splice(i, 2);
          break;
        } else {
          return false;
        }
        // arr.splice(arr.indexOf(arr[i + 1]), 1);
        //----------------------------------------------------
        // for (let j = 0; j < bracketsConfig.length; j++) {
        //   if (ind === bracketsConfig[j][1]) {
        //     arr.splice(arr.indexOf(arr[i]), 1);
        //     arr.splice(arr.indexOf(arr[i + 1]), 1);
        //     break;
        //   }
        //   // test = arr[i];
        //   // break;
        // }
        //---------------------------------------------------
      }

      // for (let i = 0; i < bracketsConfig.length; i++) {
      //   // console.log(test);
      //   // console.log(bracketsConfig[i][0]);
      //   // console.log(bracketsConfig[i][1]);
      //   // console.log(test == bracketsConfig[i][0]);
      //   if (test == bracketsConfig[i][0]) {
      //     if (!arr.includes(bracketsConfig[i][1])) {
      //       return false;
      //     } else {
      //       arr.splice(arr.indexOf(bracketsConfig[i][1]), 1);
      //       count += 1;
      //       break;
      //     }
      //   }
      //   //
      // }
      // if (count === 0) {
      //   return false;
      // }
      // console.log(arr);
    }
  }
  return true;
};
// console.log(
//   check("7|()|7", [
//     ["(", ")"],
//     ["|", "|"],
//     ["7", "7"],
//   ])
// );
// ["|", "|"], ["7", "7"], ["8", "8"];

// (8888877878887777777888888887777777887887788788887887777777788888888887788888)[
//   (["1", "2"], ["3", "4"], ["5", "6"], ["7", "7"], ["8", "8"])
// ];
// [(])
// |(|)
// 5555512575557777777555566667888888667661133833448441111222233333444442266666
//
// 77
//
// 8888877878887777777888888887777777887887788788887887777777788888888887788888
// 7878

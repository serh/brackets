module.exports = function check(str, bracketsConfig) {
  // your solution

    let stack = [];
    let splittedArray = str.split("");

    if (splittedArray.length % 2 !== 0) {
        return false;
    }

    splittedArray.forEach((current) => {
        let lastAdded = stack[stack.length-1];
        bracketsConfig.forEach(element => {
            if(lastAdded === element[0] && current === element[1]) {
                stack.pop();
            } else if (current === element[0]) {
                stack.push(current);
            }
        });
    });

    return !stack.length;

};

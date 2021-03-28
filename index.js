// Your code here
function saturdayFun(string='roller-skate') {
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function(string="go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string="*") {
    return function(adj="special") {
        return `You are ${string + adj + string}!`
    }
}


const Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3;
    },
    divide: function() {
        return 10 / 5;
    }
}

function actionApplyer(int, arr) {
    if (arr.length == 0) {
        return int;
    } else {
        for (let i = 0; i < arr.length; i++) {
            int = arr[i](int);
            arr[i](int);
        }
        return int;
    }
}
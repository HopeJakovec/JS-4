// задача 1
console.log('Задача 1');
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
};

// задача 2
console.log('Задача 2');
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < 0 && arr2[i] > -10 && arr2[i] < -3) {
        console.log(arr2[i]);
    }
}

// задача 4
console.log('Задача 4');
let arr4 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i][0] == 1 || arr4[i][0] == 2 || arr4[i][0] == 5) {
        console.log(arr4[i]); 
    }
}

// задача 5
console.log('Задача 5');
let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let j = 0; j < arr5.length; j++) {
    if (arr5[j] === 'СБ' || arr5[j] === 'ВС') {
        console.log(arr5[j].bold());
    } else {
        console.log(arr5[j]);
    }
};

// задача 6
console.log('Задача 6');
let arr6 = [8, 5, 66, 3];
console.log(arr6);
arr6[arr6.length] = 9;
console.log(arr6);

// задача 8
console.log('Задача 8');
console.log([12, false, 'Текст', 4, 2, -5, 0].reverse());
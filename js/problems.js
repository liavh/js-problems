const genList = limit => {
    const list = [];
    for (let i = 0; i < limit; i++) {
        let rnd = Math.floor(Math.random() * 200) + 1;
        if (list.indexOf(rnd) > -1) {
            i -= 1;
            continue;
        }
        list.push(rnd);
        // console.log(list);
    }
    return list;
};

// const func = () => {
//     const list = genList(800);
//     let perfect = list.filter(e => findPerfect(e));
//     perfect = perfect.slice(0, 20);
//     return perfect;
// };

// const findPerfect = e => {
//     if (Number.isInteger(Math.sqrt(e))) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const func = () => {
//     const list1 = [1, 2, 3];
//     const list2 = ['a', 'b', 'c'];
//     const listAll = [];

//     for (let i = 0; i < list1.length; i++) {
//         listAll.push(list1[i]);   
//     }
//     for (let i = 0; i < list2.length; i++) {
//         listAll.push(list2[i]);   
//     }
//     return listAll;
// };

// const func = () => {
//     const list = genList(7);
//     console.log(list);
//     let sum = 0;
//     for (let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     return sum;
// };

// const func = () => {
//     const list = genList(3);
//     console.log(list);

//     console.log(forSum(list));
//     console.log(whileSum(list));
//     console.log(recSum(list));
// };

// const forSum = list => {
//     let sum = 0;
//     for (let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     return sum;
// };

// const whileSum = list => {
//     var i = 0;
//     let sum = 0;
//     while (i < list.length) {
//         sum += list[i];
//         i++;
//     }
//     return sum;
// };

// const recSum = (list) => {
//     if (list.length === 0) {
//         return 0;
//     } else {
//         return list[0] + recSum(list.slice(1));
//     }
// };
// const func = (ar1, ar2) => {

//     let arr = [];

//     for (let i = 0; i < (ar1.length > ar2.length ? ar1.length : ar2.length); i++) {
//         arr.push(ar1[i]);
//         arr.push(ar2[i]);
//     }
//     arr = arr.filter(el => el !== undefined);
//     return arr;
// };


// const func = () => {
//     const arr1 = [5, 4, 2];
//     const arr2 = [7, 9, 1];
//     let arr = [];

//     for (let i = 0; i < (arr1.length); i++) {
//         if (arr1[i] > arr2[i]) {
//             arr.splice(i + i, 0, arr2[i]);
//             arr.splice(i + i + 1, 0, arr1[i]);
//             console.log('arr1');
//         } else if (arr1[i] < arr2[i]) {
//             arr.splice(i + i, 0, arr1[i]);
//             arr.splice(i + i + 1, 0, arr2[i]);
//             console.log('arr2');
//         } 
//         console.log(arr);
//     }
//     return arr.sort(arr);

// };

// const func = k => {
//     const arr = [1, 2, 3, 4, 5, 6];
//     console.log(arr);
//     for (let i = 0; i < k; i++) {
//         arr.push(arr[i - i]);
//         arr.shift();
//     }
//     console.log(arr);

// };

// const convToNum = e => e.length;

// const func = () => {
//     const arr = ['Hello', 'World', 'in', 'a', 'frame'];
//     const numArr = arr.map(el => convToNum(el)).sort((a, b) => a-b);
//     const longestWordLength = numArr[numArr.length - 1];
//     const topWidth = numArr[numArr.length - 1] + 4;
//     let print = `\n`;

//     arr.forEach((p, i) => {
//         let space = ``;
//         for (let x = 0; x < longestWordLength - arr[i].length; x++) {
//             space += ` `;
//         }
//         arr[i] = `${arr[i]}${space}`;
//     });

//     for (let i = 0; i < topWidth; i++) {
//         print += `*`;
//     }

//     for (let i = 0; i < arr.length; i++) {  
//         print += `\n* ${arr[i]} *`;
//     }

//     print += `\n`;

//     for (let i = 0; i < topWidth; i++) {
//         print += `*`;
//     }

//     print += `\n`;

//     return print;
// };
// const func = num => {
//     const arr = [];
//     const str = num.toString();
//     console.log(str);

//     for (let i = 0; i < str.length; i++) {
//     arr.push(parseInt(str.charAt(i)));
//     }
//     return arr;
// };

// const func = text => {
//     const arr = text.split(' ');
//     let addition = ``;

//     arr.forEach((e, i) => {
//         addition = `${arr[i].substring(0, 1)}ay`;
//         arr[i] = `${arr[i]}${addition}`;
//         arr[i] = arr[i].substring(1);
//     });
//     const str = arr.join(` `);
//     return str;
// };

const sorting = {
    selection: arr => {
        const originArr = arr;
        const newArr = [];
        let min, i;

        // 1. לבדוק אם במערך המקורי יש יותר מאלמנט 1
        while (originArr.length > 1) {
            // 2. במידה ולא, לעבור על הרשימה ולמצוא את האלמנט הנמוך ביותר
            min = originArr.reduce((a, b) => Math.min(a, b));
            i = originArr.indexOf(min);

            // 3. לדחוף את האלמנט לסוף רשימה חדשה
            newArr.push(min);

            // 4. להסיר את האלמנט מהרשימה המקורית
            originArr.splice(i, 1);
        }
        // 2. במידה ולא, לדחוף את האלמנט למערך החדש
        newArr.push(originArr[0]);

        return newArr;

    },
    insersion: arr => {
        const originArr = arr;
        const newArr = [];
        let i = 0;

        for (let i = 0; i < originArr.length; i++) {
            1.
        }

        
    }
};
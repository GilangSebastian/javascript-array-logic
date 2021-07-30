function countArray (arr) {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( typeof arr[i] !== 'number' ) {
            return "Error "
        } else {
            let countArray = 0;
            for ( let i = 0; i < arr.length; i++ ) {
                countArray += arr[i];
            }
            return countArray
        }
    }
}

console.log(countArray([1,2,3]));


function reverse (arr) {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( typeof arr[i] !== 'number' ) {
            return "Error"
        }
    }
    let array = []
    for ( let i = 0; i < arr.length; i++ ) {
        let str = arr[i].toString();
        let reversed = ""
        for ( let j = str.length - 1; j >= 0; j-- ) {
            reversed += str[j];
        }
        array.unshift(reversed * 1)
    }
    return array;
}

console.log(reverse([123,456]))

function uniqueArray (arr) {
    let unique = [];
    for ( let i = 0; i < arr.length; i++ ) {
        let checker = false;
        for ( let j = 0; j < unique.length; j++ ) {
            if ( arr[i] === unique[j] ) {
                checker = true;
            }
        }
        if (!checker) unique.push(arr[i])
    }
    return unique;
}

console.log(uniqueArray([1,1,1,2,2,2,23,3,3,3,33,]));



function boba (uang) {
    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
    console.log(`David mulai jajan dengan uang jajan ${uang} rupiah`);
    for ( let i = 0; i < listBoba.length; i++ ) {
        if ( uang - listBoba[i][1] >= 0 ) {
            console.log(`Dengan uang ${uang} cukup untuk beli ${listBoba[i][0]},
            setelah membeli ${listBoba[i][0]} uang nya bekurang ${listBoba[i][1]}`);
            uang -= listBoba[i][1];
            console.log(`Uang nya sisa ${uang}`);
        } else {
            console.log(`Dengan uang ${uang}, tidak cukup beli ${listBoba[i][0]}`);
        }
    }
    console.log(`David pulang dengan sisa uang jajan ${uang}`);
}

console.log(boba(100000));


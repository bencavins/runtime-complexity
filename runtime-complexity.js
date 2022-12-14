function do_something(n) {
    let op_count = 0  // let's keep track of the # of operations

    // we loop over our input n
    for (let i = 0; i < n; i++) {
        op_count += 1
    }

    return op_count
}

// console.log(`n=10, op_count=${do_something(10)}`)      // 10
// console.log(`n=100, op_count=${do_something(100)}`)    // 100
// console.log(`n=1000, op_count=${do_something(1000)}`)  // 1000
/* 
Operation count is proportional to n, i.e. linear.
O(n)
*/


function do_something_else(n) {
    let op_count = 0  // let's keep track of the # of operations

    // we have nested loops over n
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            op_count += 1
        }
    }

    return op_count
}

// console.log(`n=10, op_count=${do_something_else(10)}`)      // 100
// console.log(`n=100, op_count=${do_something_else(100)}`)    // 10000
// console.log(`n=1000, op_count=${do_something_else(1000)}`)  // 1000000
/* 
Operation count goes up faster and faster as n increases. (quadratic)
O(n**2) aka O(n^2)
*/


function do_something_simple(n) {
    let op_count = 0  // let's keep track of the # of operations

    op_count += 1

    return op_count
}

// console.log(`n=10, op_count=${do_something_simple(10)}`)      // 1
// console.log(`n=100, op_count=${do_something_simple(100)}`)    // 1
// console.log(`n=1000, op_count=${do_something_simple(1000)}`)  // 1
/* 
The number of operations doesn't change as on goes up.
O(1) aka constant time 
*/
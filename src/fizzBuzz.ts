
export function fizzBuzz(num: number) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += print(i)
    }
    return sum
}

const isFizz = (num: number): boolean =>
    num % 3 === 0

const isBuzz = (num: number): boolean =>
    num % 5 === 0

const isFizzBuzz = (num: number): boolean =>
    isFizz(num) && isBuzz(num)

const log = (msg: any) => {
    console.log(msg)
}

const printFizz = () =>
    log('Fizz')

const printBuzz = () =>
    log('Buzz')

const printFizzBuzz = () =>
    log('FizzBuzz')

const printNum = (num: number) =>
    log(num)

const print = (num: number) => {
    if (isFizzBuzz(num)) {
        printFizzBuzz()
    } else if (isFizz(num)) {
        printFizz()
    } else if (isBuzz(num)) {
        printBuzz()
    } else {
        printNum(num)
        return num
    }
    return 0
}

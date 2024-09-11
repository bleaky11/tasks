/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if(numbers.length === 0){
        return numbers;
    }else if (numbers.length === 1){
        const double = [...numbers, ...numbers];
        return double;
    }else{
        const end = [numbers[0], numbers[numbers.length - 1]];
        return end;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((num: number):number => num * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numb = numbers.map(
        (num : string): number => (!isNaN(Number(num)) ? Number(num) : 0));
    return numb;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const num = amounts.map(
        (dollar : string): number => ((dollar[0] === "$") ? (dollar = dollar.replace('$', ""), !isNaN(Number(dollar)) ? Number(dollar) : 0) : (!isNaN(Number(dollar)) ? Number(dollar) : 0))
    )
    return num;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let shouts = messages.filter((message : string): boolean => !message.endsWith("?"));
    shouts = shouts.map((message : string): string => (message.endsWith('!')) ? message.toUpperCase() : message);
    return shouts;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word : string): boolean => word.length < 4)
    const len = short.length;
    return len;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.every((color: string):boolean => (color === "red" || color === "blue" || color === 'green'))
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if(addends.length === 0)
        return "0=0";
    let total = addends.reduce((currentTotal: number, num: number)=> currentTotal+num, 0);
    const mathString = addends.join(("+"));
    let aString = total.toString().concat("=").concat(mathString);
    return aString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const hasNeg = values.some((value : number): boolean => value < 0);
    const total = values.reduce((total : number, value : number): number => value+total, 0);
    let newValues = values.map((value:number):number => value);
    if(!hasNeg){
        newValues.push(total)
        return newValues;
    }
    const index = values.findIndex((value : number): boolean => value < 0);
    const sumBeforeNeg = values.reduce((currentTotal: number, value : number, i: number)=> ((i < index)? currentTotal+value : currentTotal), 0);
    newValues.splice(index + 1, 0, sumBeforeNeg);
    return newValues;
}

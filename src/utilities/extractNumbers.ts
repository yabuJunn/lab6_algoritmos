export const extractNumbersFromString = (string: string) => {
    let matches = string.match(/(\d+)/);
    if (matches) {
        return parseInt(matches[0])
    }
    // Display output if number extracted
    // if (matches) {
    //     console.log(matches[0]);
    // }
}
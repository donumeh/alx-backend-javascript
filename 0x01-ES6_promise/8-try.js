export default function divideFunction(numerator, denoominator) {
    if (!denoominator) {
        throw new Error('cannot divide by 0');
    }

    return numerator / denoominator;
}
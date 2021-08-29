/**
 * Util.js
 */
const Util = {
    ArrayUtil: {
        shuffle: (arr) => {
            var currentIndex = arr.length,  randomIndex;

            while (currentIndex != 0) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
            }

            return arr;
        }
    }
} 

module.exports = Util

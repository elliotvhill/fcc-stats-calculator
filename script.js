const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
};

const getMean = (array) =>
    array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
    //
    // first pass using if statement:
    // if (sorted.length % 2 === 0) {
    //     return getMean([
    //         sorted[sorted.length / 2] - 1,
    //         sorted[sorted.length / 2],
    //     ]);
    // } else {
    //     return sorted[Math.floor(sorted.length / 2)];
    // }
    //
    const median =
        array.length % 2 === 0
            ? getMean([sorted[sorted.length / 2] - 1, sorted[sorted.length / 2]])
            : sorted[Math.floor(sorted.length / 2)];
    return median;
};


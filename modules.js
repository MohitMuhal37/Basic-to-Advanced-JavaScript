// This is how we define Modules
const stats = (function() {
    // utility functions that are private to the module
    const sum = (x, y) => x + y;
    const square = x => x * x;

    // A public Function that will be exported
    function mean(data){
        return data.reduce(sum)/data.length;
    }

    // a public function that will be exported
    function sttdv(data){
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum)/(data.length-1)
        );
    }
    // we export the public function as properties of an object
    return {mean, sttdv};
}());

// and here how we might use this module
console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.sttdv([1, 3, 5, 7, 9]));
console.log(Math.sqrt(10));
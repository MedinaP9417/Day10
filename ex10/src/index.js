function myFunction() {
    var myMusic = {

        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },

        002: {
            artist: "Celine Dion",
            title: "My Heart Will Go On",
            release_year: 1987,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true

            // Add a record here
        }
    }
}
console.log(myFunction[2]);

module.exports = myFunction;
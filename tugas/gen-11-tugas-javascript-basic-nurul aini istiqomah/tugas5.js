// no.1 buatlah function yang me-return hasil dari perkalian 2 
function multiplication(x,y) {
    return x*y;
}

// no 2 satu variable dengan tipedata object
const person = {
    name: "yoongi",
    age: 30,
    preference: {
        hobby: "painting",
        instrument: "piano",
        food: "kimchi"
    },
    
    yoongipreference: function mentionHobby() {
        return "His hobby is " + this.preference.hobby;
    },

    count: multiplication(10,10),
};


// no 3 menampilkan fungsi perkalian
console.log(person.count);



//coba
console.log(person.yoongipreference());
// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)

function forception(people, alphabet){
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var alphaPeep = []
    
    for (i = 0 ; i < people.length ; i++) {
        alphaPeep.push(people[i])
        for(j=0 ; j < alphabet.length; j++) {
            alphaPeep.push(alphabet[j])
        }
        
        console.log(alphaPeep)
    }


    
}
forception()

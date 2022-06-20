//1
// class Students {
//     constructor(grade, Fname, taz) {
//         this.grade = grade;
//         this.Fname = Fname;
//         this.taz = taz;
//     }
// }
// //2
// const stu1 = new Students(4, 'yaso', 12);
// const stu2 = new Students(5, 'dan', 2);
// console.log(stu1)
// console.log(stu2)

//3
// class User {
//     constructor(firstName, lastName, age, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }
// }
// /4/
// const user = new User('yaso', 'malako', 28, 'yaso@gmail.com')
// const user1 = new User('yacov', 'ingidaw', 33, 'jaycob@walla.com')
// const user2 = new User('lior', 'dawit', 27, 'lior@yahu.com');
// const userArray = [user, user1, user2]
// userArray.forEach((item) => {
//     for (const key in item) {
//         document.getElementById('print').innerText += item[key] + ('/n')
//     }
// })
//5
class Mofaobj {
    constructor(firstname,lastname,city){
    this.firstname= firstname;
    this.lastname= lastname;
    this.city = city; 
}

} 
    


function mofaVal() {
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let city = document.getElementById('city')
    let scren = document.getElementById('print')
    const mofa = new Mofaobj(firstname.value , lastname.value,city.value)
    mofa.innerHTML += "<tr id='counter'>+firstname.value + lastname.value+city.value+</th>"
    for(const key in Mofaobj ){
        
    }
    }
  

    


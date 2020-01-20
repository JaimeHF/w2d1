let students = [
    {name: "manuel", score: 9},
    {name: "dani", score: 7},
    {name: "laura", score: 6},
    {name: "pepe", score: 4},
]

let breakPoint = 7
let studentsWithSpecialAssistance = students.filter((student => student.score < breakPoint)).map((student) => student.name)
let studentsWithHighScore = students.filter((student => student.score >= breakPoint)).map((student) => student.name)

console.log("studentsWithSpecialAssistance", studentsWithSpecialAssistance)
console.log("studentsWithHighScore", studentsWithHighScore)

// sorting students by score
students.sort((s1, s2) => {
    if (s1.score > s2.score)    return 1;
    else    return -1
})

// reversing an array
let scores= [1,2,3,4,5]
scores.reverse()

//yields --> [5, 4, 3, 2, 1]
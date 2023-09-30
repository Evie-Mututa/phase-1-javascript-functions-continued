// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`

}
console.log(saturdayFun('go out'))

function mondayWork(activity = `go to the office`){
    return `This Monday, I will ${activity}.`
       
}
console.log(mondayWork())

function wrapAdjective(adjective = "*"){
    return function (description = "special"){
        return `You are ${adjective}${description}${adjective}!`
    }
}
console.log(wrapAdjective()())
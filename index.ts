// Question 127
let hellofunction = () => console.log("This is arrow function");
hellofunction();

// Question 128

let product = (firstnum:number,...numlist:number[]):number =>{
    let result = firstnum;
    for(let i=0;i<numlist.length;i++){
        result = result * numlist[i];
    }
    return result;
}

console.log(`Your product of number is ${product(4,5,6,7,8)}`);

// Question 129
type Student = {
    name:string,
    traditionalfunction():void,
    arrowfunction():void
}

let Student1:Student = {
    name : "Daniyal",
    traditionalfunction(){
        console.log(`Traditional function : ${this.name}`);
    },
    arrowfunction(){
        console.log(`Arrow function : ${this.name}`);
    }
};
Student1.traditionalfunction();
Student1.arrowfunction();
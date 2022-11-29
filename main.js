const buttons = document.querySelectorAll(".button");

buttons.forEach(element => {
    element.addEventListener("click", (e) => {manageClick(e)});
});

let operator = null;
let equation = [];
let number = null;

let manageClick = (e) => {
    console.log(e.target.value);
    switch(e.target.value){
        case '+':
        case '-':
        case '*':
        case '/':
            operator = e.target.value;
            print( eval(equation.join('')) );
            
            break;
        case '=':
            operator = null;
            equation = [eval(equation.join(''))];
            print(equation[0]);
            break;
        case 'ac':
            equation = []
            operaciones = null;
            number = null;
            print(0); 
            break;

        default:
            if(operator !== null && (equation.length > 0 || operator === '-')){
                equation.push(operator);
                operator = null;
                number = null;
            }
            number = (number === null)? e.target.value : number + e.target.value;
            print(number);
            equation.push(e.target.value);
    }
}

const screen = document.querySelector(".calculator__result");
let print = (msg = 0) => { screen.textContent = msg };

print();


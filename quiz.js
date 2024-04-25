const question = [{
    'que':'1. What is a data structure?',
    'a' : 'A programming language',
    'b' : 'A collection of algorithms',
    'c' : 'A way to store and organize data',
    'd' : 'A type of computer hardware',
    'correct': 'c'



},
{
    'que':'2. What are the disadvantages of arrays?',
    'a' : 'Index value of an array can be negative',
    'b' : 'Elements are sequentially accessed',
    'c' : 'Data structure like queue or stack cannot be implemented',
    'd' : 'There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size',
    'correct': 'd'



},
{
    'que':'3. What is a data structure?',
    'a' : 'Stack',
    'b' : 'Queue',
    'c' : 'List',
    'd' : 'Array',
    'correct': 'a'



}
]


let index = 0 ;
let ques = document.getElementById('question');
let optionInput = document.querySelectorAll('.options')
let right = 0
let wrong = 0
let total = question.length


const loadQuestions = () => {
if(index === total){
end()
}
else{
    reset()
    let data = question[index]
    ques.innerText = data.que;

    optionInput[0].nextElementSibling.innerText= data.a;
    optionInput[1].nextElementSibling.innerText= data.b;
    optionInput[2].nextElementSibling.innerText= data.c;
    optionInput[3].nextElementSibling.innerText= data.d;
}
}


const submitQuiz=() =>{
    let data = question[index]
    let ans = getAnswer()
    if(ans == data.correct){
        right++;

    }
    else {
        wrong--;
    }
    index++;
    loadQuestions();



    
}


const getAnswer=() =>{
    let answer;
    optionInput.forEach((input)=>{
        if(input.checked){
            answer = input.value
        
        }
        
    })
    return answer
    
}

const reset =() =>{
    optionInput.forEach((input)=>{
        input.checked = false;
    })
}
    
const end = () =>{
    document.getElementById('box').innerHTML= `
    <h3><b>Thanks for playing Quiz</b></h3><br>
    <h2>Your score ${right} out of ${total}</h2>
    
    
    `
}





loadQuestions()
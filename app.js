// const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach((btn, index) =>{
//     btn.addEventListener('click', (e) =>{
//         // console.log([e.currentTarget, index]); // dobijemo koje je dugme kliknuto i njihov index
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })


// using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((question) =>{
    // console.log(question);

    const btn = question.querySelector('.question-btn');
    // console.log(btn);

    btn.addEventListener('click', () =>{

        questions.forEach((item) =>{
            if(item !== question){
                item.classList.remove('show-text');
            }
        })


        question.classList.toggle('show-text');
    })

})
const questionsElements = document.querySelectorAll('.faq__question-wrapper');

const initQuestions = (questions) => {
  questions.forEach((question) => {
    question.addEventListener('click', (() => {
      question.parentElement.classList.toggle('faq__item--open');
    }));
  });
};

initQuestions(questionsElements);

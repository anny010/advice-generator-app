const advice=document.getElementById('advice');
const numberOfAdvice=document.getElementById('advice-number');
const button=document.getElementById('button');


button.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        advice.innerHTML = data.slip.advice;
        numberOfAdvice.innerHTML = data.slip.id;
      })
      .catch(error => console.error(error));
  });

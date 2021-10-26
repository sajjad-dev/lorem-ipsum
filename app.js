// lorem text
const text = [
  'The Diploma of Freelance Journalism from the British College of Journalism is awarded to successful graduates of this course. The practical knowledge and experience you will have acquired throughout this course will be of enormous importance as you establish yourself as a freelance journalist. At the end of your course, you will have acquired a level of skill where you can take on any assignment you choose.'  
  
];


const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit",function (e) {
 e.preventDefault();
 const value = parseInt(amount.value);
 const random = Math.floor(Math.random() * text.length);
//  console.log(isNaN(value));

 // empty
 // -1
 // > 9
 if (isNaN(value)|| value < 0 || value > 9) {
     result.innerHTML = `<p class="result">${text[0]}</p>`;
 }
});         
const boldBtn = document.querySelector("#bold-btn")
const underlineBtn = document.querySelector("#underline-btn")
const copyBtn = document.querySelector("#copy-btn")


boldBtn.addEventListener('click', () => {
  document.execCommand("bold");
})

underlineBtn.addEventListener('click', () => {
  document.execCommand("underline");
})

copyBtn.addEventListener('click', () => {
  let text = document.querySelector('.content').innerText;
  console.log(text);
navigator.clipboard.writeText(text)
})

const input = document.getElementById("input");
const buton = document.getElementById("buton");
const test = document.querySelector(".test");
console.log(input);
console.log(buton);
console.log(test);

const sesli = ["a", "e", "ı", " i", "o", "ö", "u", "ü"];

buton.addEventListener("click", () => {
  let count = 0;
  if (!input.value) {
    alert("Lütfen bir şey yazınız.");
  } else {
    for (let i = 0; i < input.value.length; i++) {
      console.log(input.value[i]);
      if (sesli.includes(input.value[i])) {
        count++;
      }
    }
  }
  console.log(
    (test.innerText = `There are ${count} vowels in ${input.value}.`)
  );
});
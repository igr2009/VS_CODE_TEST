/*document.addEventListener("click", (event) => {
  event.preventDefault();
});

Math.E;

class Car {
  constructor() {
    super();
  }

  get() {
    setTimeout(() => {
      const obj = {};
    }, 1000);
  }
}
*/

document.querySelector("h4").style.color = "green";

const getUser = async () => {
  try {
    const res = await fetch("https://vk.com");
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};

getUser();

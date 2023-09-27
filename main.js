const elementListMau = document.querySelector("#the-mau");
const elementMainHouse = document.querySelector(".main");

const colorLists = [
  {
    color: 'red'
  },
  {
    color: 'purple'
  },
  {
    color: 'blue'
  },
  {
    color: 'green'
  },
  {
    color: 'orange'
  },
  {
    color: 'black'
  },
  {
    color: 'beige'
  },
]

const showBangMau = () => {
  let content = ``;

  colorLists.map((item, index) => {
    content += `
    <button class="hop-mau" type="button" style="background: ${item.color};" onclick="changecolor('${item.color}');"></button>
    `     
  });
  elementListMau.innerHTML = content;
}

showBangMau();

const changecolor = (color) => {
    elementMainHouse.style.background = color;
}






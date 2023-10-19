// 内容数组
let buttonLists = [
  {
    img: './images/github.svg',
    title: 'Github',
    link: 'https://github.com/fuuyh'
  },
  {
    img: './images/blog.svg',
    title: 'Blog',
    link: 'https://fuuyh.github.io/blog'
  },
  {
    img: './images/case.svg', 
    title: 'About',
    link: 'https://fuuyh.github.io/some-case'
  },
  {
    img: './images/codepen.svg',
    title: 'Codepen',
    link: 'https://codepen.io/'
  }
]

// 遍历数组中的内容添加到节点里
buttonLists.forEach((item) => {
  $('#buttonList').append(`
    <li>
      <a href="${item.link}">
        <img src="${item.img}" alt="${item.title}">
      </a>
    </li>
  `) 
})

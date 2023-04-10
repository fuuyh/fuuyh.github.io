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
    link: 'https://www.noovertime.cc/blog'
  },
  {
    img: './images/case.svg',
    title: 'Case',
    link: 'https://www.noovertime.cc/case/index.html'
  },
  {
    img: './images/codepen.svg',
    title: 'Codepen',
    link: 'https://github.com/mcmyth'
  },
  {
    img: './images/aboutme.svg',
    title: 'About',
    link: 'https://github.com/about.html'
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

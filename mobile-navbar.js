class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, efeito) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'
    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      console.log(index)
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`)
    })
  }

  handleClick() {
    this.animateLinks()
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
    this.navList.addEventListener('click', this.handleClick)



  }

  init() {
    if (this.mobileMenu ) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li',
)
mobileNavbar.init()

//
window.onscroll = function () {
  scrollFunction()
}
function scrollFunction(){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    var menu = (document.getElementsByClassName( 
      'container'
      )[0].style.backgroundColor = 'black')
      
  }else{
    var menu = (document.getElementsByClassName(
      'container'
    )[0].style.backgroundColor = '')
  }
}
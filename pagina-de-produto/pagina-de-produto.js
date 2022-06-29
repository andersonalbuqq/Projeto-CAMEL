/* === HEADER DA PÁGINA ================================*/
function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }
  
  
  /* === MAIN DA PÁGINA ================================*/
  
  var splide = new Splide('#main-carousel', {
    type: 'loop',
    pagination: false
  })
  
  var thumbnails = document.getElementsByClassName('thumbnail')
  var current
  
  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i)
  }
  
  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
      splide.go(index)
    })
  }
  
  splide.on('mounted move', function () {
    var thumbnail = thumbnails[splide.index]
  
    if (thumbnail) {
      if (current) {
        current.classList.remove('is-active')
      }
  
      thumbnail.classList.add('is-active')
      current = thumbnail
    }
  })
  
  splide.mount()
  

  function mudar(){
    var drop = document.getElementsByClassName("drop")[0];
    var dig = document.getElementsByClassName("dig")[0];
    if(drop.value === "10+"){
      dig.style.display = "inline";
      drop.style.display = "none";
    }
  }
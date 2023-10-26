window.document.addEventListener('DOMContentLoaded', () => {
  const rowGrowdev = document.getElementById('row-growcast');
  const rowWebinar = document.getElementById('row-webinar');
  const rowUxUi = document.getElementById('row-ux-ui');
  const rowDiversos = document.getElementById('row-diversos');
  const modalBody = document.getElementById('iframe-modal');

  const growCast1 = document.getElementById('growcast1');

  

  movies.forEach((movie) => {
      if (movie.category == 'bobEsponja') {
          construirCard(movie, rowGrowdev)
      };
      if (movie.category == 'webinar') {
          construirCard(movie, rowWebinar)
      };
      if (movie.category == 'ux-ui') {
          construirCard(movie, rowUxUi)
      };
      if (movie.category == 'geral') {
          construirCard(movie, rowDiversos)
      };
  });
  function reloads() {
    location.reload()
    
}
  const moviesCards = document.querySelectorAll('.hover-container')

  for (const movie of moviesCards) {
      const paragraph = movie.querySelector('p');

      movie.addEventListener('mouseover', () => {
          movie.setAttribute('class','img-fluid hover-container hover mb-2');
          paragraph.setAttribute('class', '')
      });
      movie.addEventListener('mouseout', () => {
          movie.setAttribute('class','img-fluid hover-container');
          
      });

      movie.addEventListener('click', (event)=> {
          const movieLink = movie.id

          modalBody.innerHTML = `
          <iframe src="${movieLink}"  frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen frameborder="0" class="iframe"></iframe>
          `
      });
  };

  
});

function construirCard (movie, row) {
  const newCol = document.createElement('div');
  newCol.setAttribute('class', 'col-12 col-sm-6 col-md-3');

  const newContainer = document.createElement('div');
  newContainer.setAttribute('class', 'container-fluid hover-container');
  newContainer.setAttribute('data-bs-toggle', 'modal');
  newContainer.setAttribute('data-bs-target', '#modal-video')
  newContainer.setAttribute('id', `${movie.link}`);

  const newImg = document.createElement('img');
  newImg.setAttribute('class', 'img-fluid');
  newImg.setAttribute('src', `${movie.img}`);
  newImg.setAttribute('alt', `Picture = ${movie.title}`);

  const newDescricao = document.createElement('p');
  

  newDescricao.innerHTML = `
      <i class="bi bi-play-circle-fill"></i> ${movie.title}
  `

  newContainer.appendChild(newImg)
  newContainer.appendChild(newDescricao)
  newCol.appendChild(newContainer)
  row.appendChild(newCol)
};
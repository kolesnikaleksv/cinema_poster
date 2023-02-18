'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      promo = document.querySelector('.promo__bg'),
      promoList = document.querySelectorAll('.promo__interactive-item'),
      movieList = document.querySelector('.promo__interactive-list'),
      inputMovie = document.querySelector('.adding__input'),
      form = document.querySelector('.add'),
      formButton = form.querySelector('button'),
      basket = document.querySelectorAll('.delete');
      console.log(inputMovie.value, form, formButton)

formButton.addEventListener('click', function(e) {
    e.preventDefault();
    let inputValue = inputMovie.value;
    console.log(inputValue.length)
    if(inputValue != '' && inputValue != null) {
        if(inputValue.length < 5) {
            movieDB.movies.push(inputValue);
            inputMovie.value = '';
        } else {
            let cutedValue = inputValue.slice(0, 5) + '...';
            movieDB.movies.push(cutedValue);
            inputMovie.value = '';
        }
    }
    formListMovies();
})
advertising.forEach(item => {
    item.remove();
});

genre.innerHTML = 'Drama';
promo.style.backgroundImage = "url('img/bg.jpg')";
movieDB.movies.sort();

// for(let i = 0; i < promoList.length; i++) {
//     console.log(movieDB.movies[i])
//     promoList[i].innerText = movieDB.movies[i];
// }
function formListMovies() {
    movieList.innerHTML = "";
    movieDB.movies.forEach((item, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>
        `;
    })
}
formListMovies();
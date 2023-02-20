'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
          form = document.querySelector('form.add'),
          formButton = form.querySelector('button'),
          basket = document.querySelectorAll('.delete'),
          checkbox = form.querySelector('[type="checkbox"]');
    
    
    basket.forEach(item => {
    item.addEventListener('click', function(e) {
        console.log(e.target)
    })
    })
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let inputValue = inputMovie.value;
        if(inputValue) {
            if(inputValue.length > 21) {
                inputValue = inputValue.slice(0, 21) + '...';
            }

            movieDB.movies.push(inputValue);
            inputMovie.value = '';

            if(checkbox.checked) {
                console.log('Adding a favorite movie')
            }
        }
       
        formListMovies(movieDB.movies, movieList);
    })

    const deletAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }
    
    const makeChanges = () => {
        genre.innerHTML = 'Drama';
        promo.style.backgroundImage = "url('img/bg.jpg')";
    }
   
    const sortArray = (arr) => {
        arr.sort();
    }

    function formListMovies(films, parent) {
        sortArray(movieDB.movies);
        parent.innerHTML = "";
        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${item}
                    <div class="delete"></div>
                </li>
            `;
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                formListMovies(films, parent);
            })
        })
    }

    makeChanges();
    deletAdv(advertising);
    formListMovies(movieDB.movies, movieList);
})
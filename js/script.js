var app = new Vue (
    {
        el: '#root',
        data: {
            isActive: null,
            searchedFilm: '',
            films: []
        },
        methods: {
            activeSearchBar: function() {
                this.isActive == true ? this.isActive = false : this.isActive = true;
            },
            searchFilm: function() {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '63f8ca53972c84a81c6dff2fbb6513fb',
                        query: this.searchedFilm,
                        language: 'it-IT'
                    }
                })
                .then( (returnedItems) => {
                    this.films = returnedItems.data.results;
                    console.log(this.films);
                });
            }

        }

    }
);
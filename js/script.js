var app = new Vue (
    {
        el: '#root',
        data: {
            isActive: null,
            baseURL: 'https://api.themoviedb.org/3/search/',
            searchedFilm: '',
            films: [],
            series: [],
            selectLanguage: 0,
            languages: [
                'it-IT',
                'en-US',
                'es-ES'
            ],
            baseURLimage: 'https://image.tmdb.org/t/p/w',
            setWidth: 300 
        },
        methods: {
            activeSearchBar: function() {
                this.isActive == true ? this.isActive = false : this.isActive = true;
            },
            searchFilm: function() {
                axios.get( this.baseURL + 'movie', {
                    params: {
                        api_key: '63f8ca53972c84a81c6dff2fbb6513fb',
                        query: this.searchedFilm,
                        language: this.languages[this.selectLanguage]
                    }
                })
                .then( (returnedItems) => {
                    this.films = returnedItems.data.results;
                    console.log(this.films);
                });

                axios.get(this.baseURL + 'tv', {
                    params: {
                        api_key: '63f8ca53972c84a81c6dff2fbb6513fb',
                        query: this.searchedFilm,
                        language: this.languages[this.selectLanguage]
                    }
                })
                .then( (returnedItems) => {
                    this.series = returnedItems.data.results;
                    console.log(this.series);
                });
            },

        }

    }
);
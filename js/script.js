var app = new Vue (
    {
        el: '#root',
        data: {
            baseURL: 'https://api.themoviedb.org/3/',
            api_key: '63f8ca53972c84a81c6dff2fbb6513fb',
            isActive: null,
            searchedFilm: '',
            populars: [],
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
        mounted: function() {
            axios.get( this.baseURL + 'trending/all/day', {
                params: {
                    api_key: this.api_key,
                    language: this.languages[this.selectLanguage]
                }
            })
            .then( (returnedItems) => {
                this.populars = returnedItems.data.results;
                console.log(this.populars);
            });
        },
        methods: {
            activeSearchBar: function() {
                this.isActive == true ? this.isActive = false : this.isActive = true;
            },
            searchFilm: function() {
                axios.get( this.baseURL + 'search/movie', {
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

                axios.get(this.baseURL + 'search/tv', {
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
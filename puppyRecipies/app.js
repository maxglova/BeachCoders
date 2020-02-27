        // baseEndpoint
        const baseEndpoint = `http://www.recipepuppy.com`;
        const api = `${baseEndpoint}/api/`;
        const recipeGrid = document.querySelector('.recipies');
        // Cors proxy
        // A proxy is a wrapper a agent object that is being called
        // by the client to access the real serving object behind 
        // the scenes
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const form = document.querySelector('form.search')

        // form .submit
        async function handleSubmit(event) {
            event.preventDefault();
            const el = event.currentTarget;
            console.log(el.query.value);
            // Turn the form off - disable (true)
            el.submit.disable = true;
            // submit the search - first store the value to a variable
            const recipies = await fetchRecpies(el.query.value);
            el.submit.disable = false;
            displayRecipies(recipies.results);

        }

        // recipies div
        
        function handlerError(err) {
            console.log(`Huston we have a problem`);
            console.log(err);
        }
        
        // query
        async function fetchRecpies(query) {
            const response = await fetch(`${proxy}${api}?q=${query}`);
            const data = await response.json(); // = JSON.parse()
            return data;
            // load to the DOM
        }

        function displayRecipies(recipies){
            const html = recipies.map(
                recipe => `<div class="recipe">
                                <h2>${recipe.title}</h2>
                                <h2>${recipe.ingredients}</h2>
                                ${recipe.thumbnail && `<img src="${recipe.thubmnail}" alt="${recipe.title}" />`}
                                <a href="${recipe.href}">View Recipe </a>
                           </div>`
            );
            recipeGrid.innerHTML = html.join('')
        }



        form.addEventListener('click', handleSubmit);
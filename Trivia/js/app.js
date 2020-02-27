        // baseEndpoint
        const endpoint = `https://opentdb.com/api.php?amount=5&category=21&type=multiple`;

        // DOM Elements
        let triviaContainer = document.querySelector('#trivia-questions');
        const li = document.createElement('li');
        const ul = document.createElement('ul'); 

        
        function handlerError(err) {
            console.log(`Huston we have a problem`);
            console.log(err);
        }
        
        // query
        async function triviaQuestions() {
            const response = await fetch(`${endpoint}`);
            const data = await response.json(); // = JSON.parse()
            console.log(data);

            const questions = data.results;
            triviaContainer.innerHTML = '';
            console.log(questions);            
            for (var i=0; i<questions.length; i++) {
                console.log(questions[i].question);
                let question = questions[i].question;
                let correctAnswer = questions[i].correct_answer;
                let incorrectAnswers = questions[i].incorrect_answers;
                let choices = correctAnswer += incorrectAnswers;





                triviaContainer.innerHTML += `<p class="question">${question}</p> </br>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="">
                                                <label for="vehicle1"> I have a bike</label><br>
                                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                                                <label for="vehicle2"> I have a car</label><br>
                                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
                                                <label for="vehicle3"> I have a boat</label><br>`;
                
            }
        }

        triviaQuestions().catch(handlerError);
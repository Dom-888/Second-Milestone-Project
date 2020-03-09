$(document).ready(function () {

    // Load top scores from local storage
    if (typeof (Storage) !== "undefined") {
        $("#1st").text(localStorage.first);
        $("#2nd").text(localStorage.second);
        $("#3rd").text(localStorage.third);
    } else {
        $("#topScores").html("<h5>Unable to save scores with current browser</h5>");
    }

    // Apply textillate effects
    $('#title').textillate({
        in: {
            effect: 'tada',
            delay: 100,
        },
        out: {
            effect: 'tada',
            delay: 100,
            reverse: true
        },
        loop: true
    });
    $('#newRecord').textillate({
        in: {
            effect: 'bounceInDown',
            delay: 80
        },
    });

    // Open Landing Modal
    $("#landingModal").modal("show");

    // Arrays containing the words to guess
    const animals = ["elephant", "crocodile", "rabbit", "eagle", "lion", "panda", "giraffe", "frog", "whale", "chameleon", "octopus", "dolphin", "zebra", "wolf", "fox", "falcon", "armadillo", "beetle", "koala", "jaguar"];
    const movies = ["jurassic park", "the big lebowski", "pulp fiction", "the wizard of oz", "forrest gump", "jaws", "apocalypse now", "the lord of the rings", "inception", "a clockwork orange", "full metal jacket", "fight club", "the matrix", "joker", "gladiator", "blade runner", "mad max", "alien", "back to the future", "star wars"]
    const sports = ["football", "cricket", "basketball", "hockey", "tennis", "volleyball", "golf", "rugby", "boxing", "skiing", "archery", "handball", "fencing", "marathon"];
    const cities = ["tirana", "vienna", "brussels", "sofia", "prague", "copenhagen", "berlin", "athens", "budapest", "amsterdam", "monaco", "london", "rome", "sydney", "moscow", "stockholm", "instanbul", "dublin", "hong kong", "new york", "rio de janeiro"];
    const jobs = ["sommelier", "taxi driver", "plumber", "developer", "trainer", "tailor", "cook", "teacher", "barista", "barber", "farmer", "lawyer", "nurse", "surgeon", "electrician", "journalist", "fireman", "engineer", "salesman", "lifeguard", "detective"];
    const all = animals.concat(movies, sports, cities, jobs);

    // Sound effects
    const successSound = new Audio("assets/audio/success.mp3");
    const failSound = new Audio("assets/audio/pop.mp3");

    // Other global variables
    var wordToGuess; // The randomly drawn word
    var output = []; // Keeps track of the letters chosen by the player, the result will be print in the homonymous ID in HTML
    var lives = 6; // Decreases by one when the player makes a mistake
    var startTime; // Records the game start time
    var finishTime; // Records the game end time
    var points = 0; // Updates based on user guesses

    // The main object containing the functions to run the game
    var game = {
        // Draw a random word from the user selected theme and initiate the game
        selectWord: {
            animals: function () {
                wordToGuess = animals[Math.floor(Math.random() * animals.length)];
                game.initiate();
            },
            movies: function () {
                wordToGuess = movies[Math.floor(Math.random() * movies.length)];
                game.initiate();
            },
            sports: function () {
                wordToGuess = sports[Math.floor(Math.random() * sports.length)];
                game.initiate();
            },
            cities: function () {
                wordToGuess = cities[Math.floor(Math.random() * cities.length)];
                game.initiate();
            },
            jobs: function () {
                wordToGuess = jobs[Math.floor(Math.random() * jobs.length)];
                game.initiate();
            },
            all: function () {
                wordToGuess = all[Math.floor(Math.random() * all.length)];
                game.initiate();
            },
        },

        // Ready the game
        initiate: function () {
            wordToGuess = wordToGuess.toUpperCase();
            $("#selectionModal").modal("hide");
            $("#figure").attr("src", "assets/images/6_baloon(s).png");
            var d = new Date();
            startTime = d.getTime();
            for (char of wordToGuess) {
                if (char == " ") {
                    output.push(char);
                } else {
                    output.push("_");
                }
            }
            $("#output").html(output);
            $("#newRecord").hide();
        },

        // Check if the letter chosen by the user is part of the word to be guessed
        chooseLetter: function (letter) {
            console.log(wordToGuess); //For testing purpose only
            var error = true;
            var i;
            for (i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] == letter) {
                    output[i] = letter;
                    error = false;
                    game.rightGuess();
                }
            }
            if (error) {
                game.wrongGuess();
            }
        },

        // Play sound effect, update displayed word and score
        rightGuess: function () {
            successSound.play();
            $("#output").html(output);
            points += 100;
            // Check winning condition
            if (output.toString().replace(/,/g, "") == wordToGuess) {
                $("#outcome").text("Well Done!");
                game.over();
            }
        },

        // Play sound effect, update image and score
        wrongGuess: function () {
            failSound.play();
            lives--;
            $("#figure").attr("src", `assets/images/` + lives + `_baloon(s).png`);
            points -= 50;
            if (points < 0) { points = 0; }
            // Check losing condition
            if (lives == 0) {
                $("#outcome").text("You Lost...");
                game.over();
            }
        },

        // Display the Results Modal and prepare a new game
        over: function () {
            // Prepare the modal 
            $("#solution").html(`<h4>The word to guess was <b>` + wordToGuess + `</b>`);
            var d = new Date();
            finishTime = d.getTime();
            var seconds = Math.round((finishTime - startTime) / 1000);
            var score = points - seconds;
            if (score < 0) { score = 0; }
            $("#score").text(`Score: ` + score);
            $("#time").text(`Time: ` + seconds + `s`);
            // Check if the score set a record
            if (score > localStorage.third || localStorage.third == undefined) { game.updateTopScores(score); }
            // Show the modal
            $("#resultsModal").modal("show");
            // Reset key buttons and global variables
            $(".btn-key").attr("disabled", false);
            output = [];
            lives = 6;
            points = 0;
        },

        // Add new records to the leaderboard, move old top-scores to proper position
        updateTopScores: function (newRecord) {
            $("#newRecord").show();
            console.log("show")
            if (localStorage.first == undefined) { localStorage.first = newRecord; }
            else if (localStorage.second == undefined) { localStorage.second = newRecord; }
            else if (newRecord > localStorage.first) {
                localStorage.third = localStorage.second;
                localStorage.second = localStorage.first;
                localStorage.first = newRecord;
            }
            else if (newRecord > localStorage.second) {
                localStorage.third = localStorage.second;
                localStorage.second = newRecord;
            }
            else {
                localStorage.third = newRecord;
            }
            $("#1st").text(localStorage.first);
            $("#2nd").text(localStorage.second);
            $("#3rd").text(localStorage.third);
        }
    };

    /*---------------User inputs---------------*/

    // Play button
    $("#playButton").click(function () {
        $("#landingModal").modal("hide");
        $("#selectionModal").modal("show");
    });

    // Theme selection 
    $("#animals").click(function () { game.selectWord.animals(); });
    $("#movies").click(function () { game.selectWord.movies(); });
    $("#sports").click(function () { game.selectWord.sports(); });
    $("#cities").click(function () { game.selectWord.cities(); });
    $("#jobs").click(function () { game.selectWord.jobs(); });
    $("#all").click(function () { game.selectWord.all(); });

    // Letter selection
    $(".btn-key").click(function () {
        $(this).attr("disabled", true);
        game.chooseLetter(this.textContent);
    });

    // Home button
    $("#home").click(function () { location.reload(); });

    // Audio-toggle button
    $("#audioToggle").click(function () {
        $("i", this).toggleClass("fa-volume-up fa-volume-off");
        if (successSound.muted == false && failSound.muted == false) {
            successSound.muted = true;
            failSound.muted = true;
        } else {
            successSound.muted = false;
            failSound.muted = false;
        }
    });

    // Continue button
    $("#continueButton").click(function () {
        $("#resultsModal").modal("hide");
        $("#landingModal").modal("show");
    });

});
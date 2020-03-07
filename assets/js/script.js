$(document).ready(function () {

    // Load top scores from local storage
    if (typeof (Storage) !== "undefined") {
        $("#1st").text(localStorage.first);
        $("#2nd").text(localStorage.second);
        $("#3rd").text(localStorage.third);
    } else {
        $("#topScores").html("<h4>Unable to save scores with current browser</h4>");
    }

    // Open Introduction Modal as soon as the user lands on the page
    $("#introductionModal").modal("show");
    $("#playButton,#replayButton").click(function () {
        $("#introductionModal,#replayModal").modal("hide");
        $("#selectionModal").modal("show");
    });

    // Arrays containing the words to guess
    var animals = ["ELEPHANT", "CROCODILE", "RABBIT", "EAGLE", "LION", "PANDA", "GIRAFFE", "FROG", "WHALE", "CHAMELEON", "OCTOPUS", "DOLPHIN", "ZEBRA", "WOLF", "FOX", "FALCON", "ARMADILLO", "BEETLE", "KOALA", "JAGUAR"];
    var movies = ["JURASSIC PARK", "THE BIG LEBOWSKI", "PULP FICTION", "THE WIZARD OF OZ", "FORREST GUMP", "JAWS", "APOCALYPSE NOW", "THE LORD OF THE RINGS", "INCEPTION", "A CLOCKWORK ORANGE", "FULL METAL JACKET", "FIGHT CLUB", "THE MATRIX", "JOKER", "GLADIATOR", "BLADE RUNNER", "MAD MAX", "ALIEN", "BACK TO THE FUTURE", "STAR WARS"];
    var sports = ["FOOTBALL", "CRICKET", "BASKETBALL", "HOCKEY", "TENNIS", "VOLLEYBALL", "GOLF", "RUGBY", "BOXING", "SKIING", "ARCHERY", "HANDBALL", "FENCING", "MARATHON"];
    var cities = ["TIRANA", "VIENNA", "BRUSSELS", "SOFIA", "PRAGUE", "COPENHAGEN", "BERLIN", "ATHENS", "BUDAPEST", "AMSTERDAM", "MONACO", "LONDON", "ROME", "SYDNEY", "MOSCOW", "STOCKHOLM", "INSTANBUL", "DUBLIN", "HONG KONG", "NEW YORK", "RIO DE JANEIRO"];
    var jobs = ["SOMMELIER", "TAXI DRIVER", "PLUMBER", "DEVELOPER", "TRAINER", "TAILOR", "COOK", "TEACHER", "BARISTA", "BARBER", "FARMER", "LAWYER", "NURSE", "SURGEON", "ELECTRICIAN", "JOURNALIST", "FIREMAN", "ENGINEER", "SALESMAN", "LIFEGUARD", "DETECTIVE"];
    var all = animals.concat(movies, sports, cities, jobs);

    // Other global variables
    var wordToGuess; // The randomly drawn word
    var output = []; // Keeps track of the letters chosen by the player, the results will be print in the homonymous ID in HTML
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
        },

        // Check if the letter chosen by the user is part of the word to be guessed
        guessLetter: function (letter) {
            console.log(wordToGuess) //For testing purpose only
            var error = true;
            var i;
            for (i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] == letter) {
                    output[i] = letter;
                    $("#output").html(output);
                    error = false;
                    // Update score
                    points += 100;
                    // Check winning condition
                    if (output.toString().replace(/,/g, "") == wordToGuess) {
                        $("#outcome").text("Well Done!");
                        game.over();
                    }
                }
            }
            if (error) {
                lives--;
                // Update the figure
                $("#figure").attr("src", `assets/images/` + lives + `_baloon(s).png`);
                // Update score
                points -= 50;
                if (points < 0) { points = 0 };
                // Check losing condition
                if (lives == 0) {
                    $("#outcome").text("You Lost...");
                    game.over();
                }
            }
        },

        // Add new records to the leaderboard, move old top-scores to proper position
        updateTopScores: function (newRecord) {
            if (localStorage.first == undefined) { localStorage.first = newRecord }
            else if (localStorage.second == undefined) { localStorage.second = newRecord }
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
        },

        // Display the Replay Modal and prepare a new game
        over: function () {
            // Prepare the modal 
            $("#solution").html(`<h4>The word to guess was <b>` + wordToGuess + `</b>`);
            var d = new Date();
            finishTime = d.getTime();
            var seconds = Math.round((finishTime - startTime) / 1000);
            var score = points - seconds;
            if (score < 0) { score = 0 };
            $("#score").text(`Score: ` + score);
            $("#time").text(`Time: ` + seconds + `s`);
            // Check if the score set a record
            if (score > localStorage.third || localStorage.third == undefined) { game.updateTopScores(score); }
            // Show the modal
            $("#replayModal").modal("show");
            // Reset key buttons and global variables
            $(".btn-key").attr("disabled", false);
            output = [];
            lives = 6;
            points = 0;
        }
    };


    /*---------------User inputs---------------*/

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
        game.guessLetter(this.textContent);
    });

    // Home button
    $("#home").click(function () { location.reload(); });

    // Audio-toggle button
    // $("#audioToggle").click(function () {
    // });

});
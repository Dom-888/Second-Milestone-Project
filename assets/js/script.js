$(document).ready(function () {

    // Opens the modal dialog as soon as the page is loaded, also prevents modal closings by clicking outside the window
    $("#introductionModal").modal({
        backdrop: 'static',
        keyboard: false
    })
    // The closing of this dialog is handled in line, for now


    $("#playButton").click(function () {
        $("#selectionModal").modal({
            backdrop: 'static',
            keyboard: false
        });
        $("#introductionModal").modal("hide");
    });

    // Arrays containing the words to guess
    const animals = ["ELEPHANT", "CROCODILE", "RABBIT", "EAGLE", "LION", "PANDA", "GIRAFFE", "FROG", "WHALE", "CHAMELEON", "OCTOPUS", "DOLPHIN", "ZEBRA", "WOLF", "FOX", "FALCON", "ARMADILLO", "BEETLE", "KOALA", "JAGUAR"]
    const movies = ["JURASSIC PARK", "THE BIG LEBOWSKI", "PULP FICTION", "THE WIZARD OF OZ", "FORREST GUMP", "JAWS", "APOCALYPSE NOW", "THE LORD OF THE RINGS", "INCEPTION", "A CLOCKWORK ORANGE", "FULL METAL JACKET", "FIGHT CLUB", "THE MATRIX", "JOKER", "GLADIATOR", "BLADE RUNNER", "MAD MAX", "ALIEN", "BACK TO THE FUTURE", "STAR WARS"]
    const sports = ["FOOTBALL", "CRICKET", "BASKETBALL", "HOCKEY", "TENNIS", "VOLLEYBALL", "GOLF", "RUGBY", "BOXING", "SKIING", "ARCHERY", "HANDBALL", "FENCING", "MARATHON"]
    const cities = ["TIRANA", "VIENNA", "BRUSSELS", "SOFIA", "PRAGUE", "COPENHAGEN", "BERLIN", "ATHENS", "BUDAPEST", "AMSTERDAM", "MONACO", "LONDON", "ROME", "SYDNEY", "MOSCOW", "STOCKHOLM", "INSTANBUL", "DUBLIN", "HONG KONG", "NEW YORK", "RIO DE JANEIRO"]
    const jobs = ["SOMMELIER", "TAXI DRIVER", "PLUMBER", "DEVELOPER", "TRAINER", "TAILOR", "COOK", "TEACHER", "BARISTA", "BARBER", "FARMER", "LAWYER", "NURSE", "SURGEON", "ELECTRICIAN", "JOURNALIST", "FIREMAN", "ENGINEER", "SALESMAN", "LIFEGUARD", "DETECTIVE"]
    const all = animals.concat(movies, sports, cities, jobs)

    // Global variables
    let wordToGuess; // The randomly drawn word
    let output = []; // Keeps track of the letters chosen by the player, the results will be print in the homonymous ID in HTML
    let lives; // Decreases by one when the player makes a mistake, triggers game over when it reaches 0

    const game = {
        // Draws a random word from the user selected theme and initiates the game
        selectWord: {
            animals: function () {
                wordToGuess = animals[Math.floor(Math.random() * animals.length)];
                game.initiate()
            },
            movies: function () {
                wordToGuess = movies[Math.floor(Math.random() * movies.length)];
                game.initiate()
            },
            sports: function () {
                wordToGuess = sports[Math.floor(Math.random() * sports.length)];
                game.initiate()
            },
            cities: function () {
                wordToGuess = cities[Math.floor(Math.random() * cities.length)];
                game.initiate()
            },
            jobs: function () {
                wordToGuess = jobs[Math.floor(Math.random() * jobs.length)];
                game.initiate()
            },
            all: function () {
                wordToGuess = all[Math.floor(Math.random() * all.length)];
                game.initiate()
            },
        },

        initiate: function () {
            $("#selectionModal").modal("hide");

            for (char of wordToGuess) {
                if (char == " ") {
                    output.push(char);
                } else {
                    output.push("_");
                }
            }

            $("#output").html(output);
        },

        guessLetter: function (letter) {
        var error = true;
        var i;
        for (i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] == letter) {
                output[i] = letter;
                $("#output").html(output);
                error = false;
            }
        }
        if (error) {
            console.log("nope");} // In the final version this will trigger game.mistake

        // Now change the style of the key button and makes it unclickable
        },
    
        reset: function () {
            output = "";
            lives = 6;
        },
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
    $(".btn-key").click(function () { game.guessLetter(this.textContent)});




});
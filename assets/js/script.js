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
    });

    // Arrays containing the words to guess
    const animals = ["ELEPHANT", "CROCODILE", "RABBIT", "EAGLE", "LION", "PANDA", "GIRAFFE", "FROG", "WHALE", "CHAMELEON", "OCTOPUS", "DOLPHIN", "ZEBRA", "WOLF", "FOX", "FALCON", "ARMADILLO", "BEETLE", "KOALA", "JAGUAR"]
    const movies = ["JURASSIC PARK", "THE BIG LEBOWSKI", "PULP FICTION", "THE WIZARD OF OZ", "FORREST GUMP", "JAWS", "APOCALYPSE NOW", "THE LORDS OF THE RINGS", "INCEPTION", "A CLOCKWORK ORANGE", "FULL METAL JACKET", "FIGHT CLUB", "THE MATRIX", "JOKER", "GLADIATOR", "BLADE RUNNER", "MAD MAX", "ALIEN", "BACK TO THE FUTURE", "STAR WARS"]
    const sports = ["FOOTBALL", "CRICKET", "BASKETBALL", "HOCKEY", "TENNIS", "VOLLEYBALL", "GOLF", "RUGBY", "BOXING", "SKIING", "ARCHERY", "HANDBALL", "FENCING", "MARATHON"]
    const cities = ["TIRANA", "VIENNA", "BRUSSELS", "SOFIA", "PRAGUE", "COPENHAGEN", "BERLIN", "ATHENS", "BUDAPEST", "AMSTERDAM", "MONACO", "LONDON", "ROME", "SYDNEY", "MOSCOW", "STOCKHOLM", "INSTANBUL", "DUBLIN", "HONG KONG", "NEW YORK", "RIO DE JANEIRO"]
    const jobs = ["SOMMELIER", "TAXI DRIVER", "PLUMBER", "DEVELOPER", "TRAINER", "TAILOR", "COOK", "TEACHER", "BARISTA", "BARBER", "FARMER", "LAWYER", "NURSE", "SURGEON", "ELECTRICIAN", "JOURNALIST", "FIREMAN", "ENGINEER", "SALESMAN", "LIFEGUARD", "DETECTIVE"]
    const all = animals.concat(movies, sports, cities, jobs)

    // Global variables
    let wordToGuess;


    const game = {
        // Draws a random word from user selected theme and initiates the game
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
            console.log(wordToGuess);
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

});
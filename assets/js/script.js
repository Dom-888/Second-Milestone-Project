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
    const wordToGuess = {
        all: animals.concat(movie, sports, cities, jobs),
        animals: ["ELEPHANT", "CROCODILE", "RABBIT", "EAGLE", "LION", "PANDA", "GIRAFFE", "FROG", "WHALE", "CHAMELEON", "OCTOPUS", "DOLPHIN", "ZEBRA", "WOLF", "FOX", "FALCON", "ARMADILLO", "BEETLE", "KOALA", "JAGUAR"],
        movies: ["JURASSIC PARK", "THE BIG LEBOWSKI", "PULP FICTION", "THE WIZARD OF OZ", "FORREST GUMP", "JAWS", "APOCALYPSE NOW", "THE LORDS OF THE RINGS", "INCEPTION", "A CLOCKWORK ORANGE", "FULL METAL JACKET", "FIGHT CLUB", "THE MATRIX", "JOKER", "GLADIATOR", "BLADE RUNNER", "MAD MAX", "ALIEN", "BACK TO THE FUTURE", "STAR WARS"],
        sports: ["FOOTBALL", "CRICKET", "BASKETBALL", "HOCKEY", "TENNIS", "VOLLEYBALL", "GOLF", "RUGBY", "BOXING", "SKIING", "ARCHERY", "HANDBALL", "FENCING", "MARATHON"],
        cities: ["TIRANA", "VIENNA", "BRUSSELS", "SOFIA", "PRAGUE", "COPENHAGEN", "BERLIN", "ATHENS", "BUDAPEST", "AMSTERDAM", "MONACO", "LONDON", "ROME", "SYDNEY", "MOSCOW", "STOCKHOLM", "INSTANBUL", "DUBLIN", "HONG KONG", "NEW YORK", "RIO DE JANEIRO"],
        jobs: ["SOMMELIER", "TAXI DRIVER", "PLUMBER", "DEVELOPER", "TRAINER", "TAILOR", "COOK", "TEACHER", "BARISTA", "BARBER", "FARMER", "LAWYER", "NURSE", "SURGEON", "ELECTRICIAN", "JOURNALIST", "FIREMAN", "ENGINEER", "SALESMAN", "LIFEGUARD", "DETECTIVE"]
    }
});
# The Hangaman Game

This is a digital version of the classic paper-and-pencil game, restyled to be more child-friendly.

pic from http://ami.responsivedesign.is/

## UX

The goal of the project was to create a game that is both nostalgic for adults and educational for children, but without the questionable taste of the original one. 
 
#### User Stories

As a player aged between 6 to 99 years old I want to:

1. The ability to intuitively understand how to play the game.
2. The ability to choose different themes in which to play.
3. A combination of visual and audio feedback after each move to make the game more engaging.
4. A mute button to remove the sounds effect, in case they become annoying.
5. The ability to see my top scores, so I can try to beat them.
6. The ability to play on my smartphone as well as my tablet and my laptop.

### Design Choices

1. **Fonts** <br>
All fonts are from [Google Fonts](https://fonts.google.com/) <br>
    - The site's main font is **Roboto**, it was chosen for its clear and straight design.    
    - The font of the word to guess is **Patrick Hand**, it was chosen because of its resemblance to handwriting.

2. **Buttons** <br>
The buttons style is from [Bootstrap](https://getbootstrap.com/) <br>
    - Large-call-to-action buttons are used in all modals to guide the flow of the game
    - Each button contains a [Font Awesome](https://fontawesome.com/) icon that represents its meaning, this makes site navigation more intuitive and also makes the site's appearance more playful.
    - The shadow under the buttons narrows when clicking, giving the illusion that the button is pushed down

3. **Colours** <br>
The site uses light, pastel colors with good contrast between them. <br>
    - Sky blue (#81DAFC) is used as default button color, it was chosen because it is a more pastel version of the bootstrap primary button. The same color is used as fallback for the background.    
    - Bright orange (#D35400) is used to highlight the buttons when the user hovers them with the mouse, it creates a nice contrast with the idles buttons.    
    - Yellow paper (#FDF6E3 to #fde1ab) are used to create the effect of old paper   

4. **Hangman Figure** <br>
The hangman figure was created by the author from free images with [Paint.net](https://www.getpaint.net/) <br>
    - In the original game, a hanged man is gradually drawn each time the player chooses a wrong letter. In this version he is replaced by a flying kid "hanging" on balloons. The idea is to remain consistent with the name of the game and at the same time make the image more suitable for children.
    - The project aims to create a fully responsive game, one of the greatest challenges in this regard has been to make the image size consistent with extremely different width/height ratio viewports. 

5. **Sound Effects** <br>
All sound effects are from [Freesound](https://freesound.org/) <br>
    - A positive sound is played if the player chooses a correct letter, the sound style reminds the old arcade video games and contributes to creating a nostalgic atmosphere as well as to make the game more interactive.    
    - A "Pop" sound is played if the player chooses a wrong letter, creates the illusion that one of the balloons in the image has burst.

6. **Background** <br>
The background image is from [Freepik](https://www.freepik.com/) <br>
    - It was chosen because it looks like a painted sky and creates a good contrast with the yellow of the gameplay page.

7. **Styling** <br>
The website style is inspired by [PicFlip!](https://ajgreaves.github.io/picflip/) <br>
    - Most buttons and containers were given black thick border and rounded corners to make them look more cartoonish    
    - The title and the "New Record" signal are animated using [Textillate](https://textillate.js.org/)

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- **Programming languages**
    - [HTMLS](https://devdocs.io/html/) 
    - [CSS3](https://devdocs.io/css/) 
    - [JavaScript](https://devdocs.io/javascript/) 

- **Libraries**
    - [JQuery](https://jquery.com) was used to simplify DOM manipulation.
    - [Google Fonts](https://fonts.google.com/) was used to import the fonts used in the website.
    - [Font Awesome](https://fontawesome.com/) was used to create button icons.

- **Plugins**
    - [Textillate](https://textillate.js.org/) was used to animate the title and the "New Record" signal.

- **Frameworks**
    - [Bootstrap](https://getbootstrap.com/) was used extensively to create the responsive design, in particular the grid and the modal classes.
    - [Jasmine](https://jasmine.github.io/) was used to automatically test the JavaScript code.

- **API**
    - [Web Storage](https://www.w3schools.com/html/html5_webstorage.asp) was used to save scores in the leaderbord.

- **Services**
    - [GitPod](https://www.gitpod.io/) was the main IDE in which the project was developed.
    - [Git](https://git-scm.com/) was used for version control during the development process.
    - [GitHub](https://github.com/) was used for remote repository hosting.
    - [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) was used to test responsiveness and quickly debug code.
    - [HTML Validator](https://validator.w3.org/) was used to test the HTML code.
    - [CSS Validator](https://jigsaw.w3.org/css-validator/) was used to test the CSS code.
    - [JSHint analysis](https://jigsaw.w3.org/css-validator/) was used to test the JavaScript code.
    - [Autoprefixer](https://autoprefixer.github.io/) was used to add prefixes in the CSS for cross-browser support.
    - [Figma](https://www.figma.com/) was used for wireframing
    - [Online Audio Converter](https://online-audio-converter.com/it/) was used for simple sounds manipulation.

- **Software**
    - [Paint.net](https://www.getpaint.net/) was used for simple images manipulation.
    - [Visual Studio Code](https://code.visualstudio.com/) was used for testing snippet of JS code.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
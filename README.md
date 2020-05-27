

# [The Hangman Game](https://dom-888.github.io/Second-Milestone-Project/)

A digital version of the classic paper-and-pencil game, restyled to be more child-friendly.

!["Responsive Representation"](assets/images/screenshots/responsive-representation.png "Responsive Representation")

## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**Player Goals**](#player-goals)
    - [**Developer Goals**](#developer-goals)
    - [**User Stories**](#user-stories)
    - [**Design Choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)
    - [**Removed Features**](#removed-features)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)
    - [**Tested Devices**](#tested-devices)
    - [**Laptop Testing**](#laptop-testing)
    - [**Smartphone Testing**](#smartphone-testing)
    - [**Validation Services**](#validation-services)
    - [**Bugs Discovered**](#bugs-discovered)

6. [**Deployment**](#deployment)
    - [**How to run this project locally**](#how-to-run-this-project-locally)

7. [**Credits**](#credits)
    - [**Code**](#code)
    - [**Media**](#media)
    - [**Acknowledgments**](#acknowledgments)

8. [**Disclaimer**](#disclaimer)

## UX


### Project Goals  
  
The goal of the project was to create a game that is both nostalgic for adults and educational for children, but without the questionable taste of the original one.  
  
### Player Goals  
  
Player goals are:  
- A fun game to play.  
- A visually appealing interface.  
- Easily learn how to play.  
- Having an engaging game experience.  
  
[Hangman](https://dom-888.github.io/Second-Milestone-Project/) meets these goals by:  
- Adopting the familiar gameplay of a classic and well-known game.  
- Using colorful images and pastel colors.  
- Having intuitive controls that allow a smooth navigation flow.  
- Giving the player positive feedback on each successful action.  
  
### Developer Goals  
  
- Improve the ability to create responsive design websites through the mobile-first approach.  
- Learn the ability to make a website interactive using JavaScript and jQuery.  
- Add a functional and visually attractive website to the developer portfolio.  
  
### User Stories  
  
As a player aged between 6 to 99 years old I want to:  
  
1. The ability to intuitively understand how to play the game.  
2. The ability to choose different themes in which to play.  
3. A combination of visual and audio feedback after each move to make the game more engaging.  
4. A mute button to remove the sounds effect, in case they become annoying.  
5. The ability to see my top scores, so I can try to beat them.  
6. The ability to play on my smartphone as well as my tablet and my laptop.  
  
### Design Choices  
  
1. **Fonts**  
All fonts are from [Google Fonts](https://fonts.google.com/).  
    - _Roboto_: Site main font, it was chosen for its clear and straight design.  
    - _Patrick Hand_: Used in the word to guess, it was chosen because of its resemblance to handwriting.  
    - _Helvetica_: Chosen for the on-screen keyboard is, as it is commonly used in real keyboards.  
  
2. **Buttons**  
The buttons style is from [Bootstrap](https://getbootstrap.com/).  
    - _Modals Buttons_: Each modals use large call-to-action buttons to guide the flow of the game, each of the buttons contains a [Font Awesome](https://fontawesome.com/) icon that represents its meaning, this makes site navigation more intuitive and also makes the site's appearance more playful.  
    - _Corners Buttons_: The buttons at the top corners of the page have a more subtle animation than the others to not distract the player, but are consistent with the style of other buttons.  
    - _On-Screen Keyboard_: Designed to look like an android keyboard with the dark theme.  
  
3. **Colors**  
The site uses light, pastel colors with good contrast between them.  
    - _Sky Blue (#81DAFC)_: Used as default button color, it was chosen because it is a more pastel version of the bootstrap primary button. The same color is used as fallback for the background.  
    - _Bright Orange (#D35400)_: Used to highlight the buttons when the user hovers them with the mouse, it creates a nice contrast with the idles buttons.  
    - _Paper-like Yellow (#FDF6E3 to #FDELAB)_: are used to create the effect of old paper and give the feeling of the paper-and-pencil game.  
  
4. **Images**  
The images used on the site were chosen with the goal of creating a light and cartoonesque atmosphere.  
    - _Hangman Figure_: In the original game, a hanged man is gradually drawn each time the player chooses a wrong letter. In this version, he is replaced by a flying kid "hanging" on balloons. The idea is to remain consistent with the name of the game and at the same time make the image more suitable for children.  
    - _Background Image_: Chosen for its resemblance to a painted sky, creates a good contrast with the yellow of the gameplay page.  
  
5. **Sound Effects**  
All sound effects are from [Freesound](https://freesound.org/).  
    - _Success Sound_: Played if the player chooses a correct letter, the sound style reminds the old arcade video games and contributes to creating a nostalgic atmosphere as well as to make the game more interactive.  
    - _Pop Sound_: Played if the player chooses a wrong letter, creates the illusion that one of the balloons in the image has burst.  
  
6. **Animated Text**  
The text animation is achieved with [Textillate](https://textillate.js.org/).
    - _Title_: A subtle animation distinguishes the title from other headers.  
    - _"New Record" message_: A flashy red message appears each time the player gets a new record, creating a sense of accomplishment.  
  
7. **Styling**  
The website style is inspired by [PicFlip!](https://ajgreaves.github.io/picflip/).
    - _Cartoonish Borders_: Most buttons and containers were given black thick border and rounded corners to make them look more carton-like.  
    - _Buttons Shadow_: Most buttons have a sharp, vertical shadow that narrows when clicking, giving the illusion that the button is pushed down.  
  
### Wireframes  
  
The wireframes were created using [Figma](https://www.figma.com/) and can be found [here](https://www.figma.com/file/W6byLl333Stnds9vzlbSOB/Second-milestone-project?node-id=8%3A23).  
  
## Features  
  
The website uses a one-page design with modals that are shown at appropriate times based on user interaction.  
  
### Existing Features  
  
1. **Landing Modal**  
Appears as soon as the user enters the site.  
    - _Introduction_: Show the user a brief description of the game.  
    - _Play Button_: Allows the user to start a new game.  
    - _Top Scores_: Allows the user to see his previous three top scores.  
  
2. **Selection Modal**  
Allows the user to choose the category in which to play.  
    - _Theme Buttons_: Allows the user to choose from 5 themes in which to play. Alternatively, the "All" button combines all the themes together.  
  
3. **Gameplay Page**  
The page where the game takes place.  
    - _Home Button_: Allows the user to return to the Landing Modal.  
    - _Audio-Toggle Button_: Allows the user to enable/disable sound effects.  
    - _Hangman Figure_: It's the graphic component of the game as well as the main visual feedback. Occupies the top third of the page  
    - _Hidden Word_: Gradually revealed as the user guesses the letters. It is the element in which the user's attention is focused and therefore occupies the center of the page.  
    - _On-screen Keyboard_: It occupies the lower third of the page, a familiar position when playing on a mobile phone.  
  
4. **Results Modal**  
Appears at the end of the game and shows the results.  
    - _Game Outcome_: Shows two possible messages, one for victory and one for defeat, and in the latter case lets the player know which was the word to guess.  
    - _Continue Button_: Allows the user to return to the Landing Modal to start a new game.  
    - _Game Score_: Show the score and time of the game just played. An animated message informs the user if the score is a new record.  
  
### Features Left to Implement  
  
1. **Global Leaderboard**  
At present, the game saves the player's best scores in the browser. The next step is to create a global leaderboard with the best scores of all players saved on a server. To do this I need to develop back-end skills not yet covered in the course.  
  
2. **Additional Words to Guess**  
Currently, in the game there are 165 words to guess contained in arrays. It's possible to increase game longevity by increasing the number of words and storing them in JSON files, more suitable than arrays to contain large quantities of elements.  
  
3. **Multiplayer**  
It would be interesting to introduce a two player mode, where one chooses a word and the other has to guess it.  
  
### Removed Features  
  
1. **Tutorial**  
In the wireframes, the project included a detailed description of how to play, I decided to remove it during development because people don't like tutorials and walls of text are even worse. On the other hand, I tried to make learning the game as simple and intuitive as possible.  
  
## Technologies Used  
  
- **Languages**  
    - [HTML5](https://devdocs.io/html/)
    - [CSS3](https://devdocs.io/css/) 
    - [JavaScript](https://devdocs.io/javascript/)
  
- **Libraries**  
    - [JQuery](https://jquery.com) was used to simplify DOM manipulation.  
    - [Google Fonts](https://fonts.google.com/) was used to import the fonts used on the website.  
    - [Animate.css](https://daneden.github.io/animate.css/) was added as dependency of Textillate.
  
- **Frameworks**  
    - [Bootstrap](https://getbootstrap.com/) was used extensively to create the responsive design, in particular the grid and the modal classes.  
  
- **Plugins**  
    - [Textillate](https://textillate.js.org/) was used to animate the title and the "New Record" signal.  
    - [Lettering.js](http://letteringjs.com/) was added as dependency of Textillate.
  
- **Toolkits**  
    - [Font Awesome](https://fontawesome.com/) was used to create button icons.  
  
- **API**  
    - [Web Storage](https://www.w3schools.com/html/html5_webstorage.asp) was used to save scores in the leaderboard.  
  
- **Services**  
    - [GitPod](https://www.gitpod.io/) was the main IDE in which the project was developed.  
    - [Git](https://git-scm.com/) was used for version control during the development process.  
    - [GitHub](https://github.com/) was used to host the project in a remote repository.  
    - [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) was used to test responsiveness and quickly debug code.  
    - [HTML Validator](https://validator.w3.org/) was used to test the HTML code.  
    - [CSS Validator](https://jigsaw.w3.org/css-validator/) was used to test the CSS code.  
    - [JSHint](https://jshint.com/) was used to test the JavaScript code.  
    - [Autoprefixer](https://autoprefixer.github.io/) was used to add prefixes in the CSS for cross-browser support.  
    - [Figma](https://www.figma.com/) was used for wireframing.
    - [Online Audio Converter](https://online-audio-converter.com/it/) was used to modify the volume and format of the sound effects.
    - [Am I Responsive?](http://ami.responsivedesign.is/) was used to take the [screenshot](#the-hangman-game) placed at the beginning of this document. 
  
- **Software**  
    - [Paint.net](https://www.getpaint.net/) was used to create the Hangman Image.
    - [Visual Studio Code](https://code.visualstudio.com/) was used for testing snippet of JS code.  
  
  
## Testing  
  
### Tested Devices  
The website has been successfully tested with the following devices, plus all those simulated by the [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools).    
  
```  
| -----------|---------------------------- |------------------------------|  
| Type       | Device                      | Browsers                     |  
| -----------|---------------------------- |------------------------------|  
| Laptop     | Asus FX753VD                | Chrome, Firefox, Edge, Opera |  
| Smartphone | Lenovo Moto G5S Plus        | Chrome, Firefox              |  
| Smartphone | Samsung Galaxy note 10 plus | Chrome                       |  
| Smartphone | Samsung Galaxy s9           | Chrome                       |  
| Smartphone | Samsung Galaxy a50          | Firefox Focus                |  
| Smartphone | Asus ZenFone 4 max          | Chrome                       |  
| Smartphone | Apple iPhone 7              | Safari                       |  
| -----------|---------------------------- |------------------------------|  
```  
  
### Laptop Testing  
All the following steps was repeated in 2 viewport sizes: 1920px and 958px.  
  
1. **Landing Modal**  
    - Open the game in a new tab and verify that the Landing Modal is automatically launched.  
    - Verify that the modal is displayed correctly in the center of the screen.  
    - Verify that the title is animated correctly.  
    - Press the ESC key and click outside the modal to verify that it remains open.  
    - Verify that the Top Scores are shown in the correct order.  
    - Hover the mouse on the Play Button to verify that the hover animation works properly.  
    - Click on the Play Button and verify that the Landing Modal is closed while the Selection Modal is opened.  
  
2. **Selection Modal**  
    - Verify that the modal is displayed correctly in the center of the screen.  
    - Press the ESC key and click outside the modal to verify that it remains open.  
    - Hover the mouse on the Theme Buttons to verify that the hover animation works properly.  
    - Click on the Animals Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Animals" array.  
    - Click on the Cities Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Cities" array.  
    - Click on the Movies Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Movies" array.  
    - Click on the Sports Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Sports" array.  
    - Click on the Jobs Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Jobs" array.  
    - Click on the All Button and verify that the Selection Modal is closed while the game is launched, repeat a number of times to verify that the word to guess can be selected from each array.  
  
3. **Gameplay Page**  
    - Verify that the game container is displayed correctly in the center of the screen.  
    - Verify that all elements are displayed correctly in their proper position.  
    - Hover the mouse on the Home Button and the Sound-toggle Button to verify that the hover animation works properly.  
    - Click on the Home Button and verify that the page is reloaded.  
    - Click on the Sound-toggle Button and verify that the sound effects are removed, click again and verify that the sound effects are restored.  
    - Click on the letters of the on-screen keyboard to verify that:  
    - The click animation is displayed correctly.  
    - If the chosen letter is part of the word to guess, it replaces the underscores in the center of the screen at all appropriate locations.  
    - If the chosen letter is part of the word to guess, a success sound is played.  
    - If the chosen letter is not part of the word to guess, the Hangman Figure updates by losing a balloon.  
    - If the chosen letter is part of the word to guess, a "pop" sound is played.  
    - The results modal is displayed if the chosen letter completes the word to guess.  
    - The results modal is displayed if the chosen letter is not part of the word and all the balloons are burst.  
    - The key becomes inactive after being clicked once.  
  
4. **Results Modal**  
    - Verify that the modal is displayed correctly in the center of the screen.  
    - Press the ESC key and click outside the modal to verify that it remains open.  
    - Verify that the "Well Done" and "You lost .." messages are displayed when appropriate.  
    - Verify that score and time are displayed correctly.  
    - Verify that the "new record" message is displayed at the appropriate time and animated correctly.  
    - Hover the mouse on the Continue Button to verify that the hover animation works properly.  
    - Click on the Continue Button and verify that the Results Modal is closed while the Landing Modal is opened.  
  
5. **New Game**  
    - Verify that any new records are added to the Top Scores in the proper positions.  
    - Verify that the Hangman Figure is resetted.  
    - Verify that the word to guess is changed.  
    - Verify that all keys of the on-screen keyboard are active again.  
  
### Smartphone Testing  
  
1. **Landing Modal**  
    - Open the game in a new tab and verify that the Landing Modal is automatically launched.  
    - Verify that the modal is displayed correctly in the center of the screen.  
    - Verify that the title is animated correctly.  
    - Tap outside the modal to verify that it remains open.  
    - Verify that the Top Scores are shown in the correct order.  
    - Tap on the Play Button and verify that the Landing Modal is closed while the Selection Modal is opened.  
  
2. **Selection Modal**  
    - Verify that the modal is displayed correctly in the center of the screen.  
    - Tap outside the modal to verify that it remains open.  
    - Tap on the Animals Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Animals" array.  
    - Tap on the Cities Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Cities" array.  
    - Tap on the Movies Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Movies" array.  
    - Tap on the Sports Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Sports" array.  
    - Tap on the Jobs Button and verify that the Selection Modal is closed while the game is launched and that the word to guess belongs to the "Jobs" array.  
    - Tap on the All Button and verify that the Selection Modal is closed while the game is launched, repeat a number of times to verify that the word to guess can be selected from each array.  
  
3. **Gameplay Page**  
    - Verify that the game container is displayed correctly in the center of the screen.  
    - Verify that all elements are displayed correctly in their proper position.  
    - Tap on the Home Button and verify that the page is reloaded.  
    - Tap on the Sound-toggle Button and verify that the sound effects are removed, tap again and verify that the sound effects are restored.  
    - Tap on the letters of the on-screen keyboard to verify that:  
    - The tap animation is displayed correctly.  
    - If the chosen letter is part of the word to guess, it replaces the underscores in the center of the screen at all appropriate locations.  
    - If the chosen letter is part of the word to guess, a success sound is played.  
    - If the chosen letter is not part of the word to guess, the Hangman Figure updates by losing a balloon.  
    - If the chosen letter is part of the word to guess, a "pop" sound is played.  
    - The results modal is displayed if the chosen letter completes the word to guess.  
    - The results modal is displayed if the chosen letter is not part of the word and all the balloons are burst.  
    - The key becomes inactive after being tapped once.  
  
4. **Results Modal**  
    - Verify that the modal is displayed correctly in the center of the screen.  
    - Tap outside the modal to verify that it remains open.  
    - Verify that the "Well Done" and "You lost .." messages are displayed when appropriate.  
    - Verify that score and time are displayed correctly.  
    - Verify that the "new record" message is displayed at the appropriate time and animated correctly.  
    - Tap on the Continue Button and verify that the Results Modal is closed while the Landing Modal is opened.  
  
5. **New Game**  
    - Verify that any new records are added to the Top Scores in the proper positions.  
    - Verify that the Hangman Figure is resetted.  
    - Verify that the word to guess is changed.  
    - Verify that all keys of the on-screen keyboard are active again.  
  
### Validation services  
The following validation services were used to check the validity of the website code.  
- [HTML Validator](https://validator.w3.org/) was used to test the HTML code.  
- [CSS Validator](https://jigsaw.w3.org/css-validator/) was used to test the CSS code.  
- [JSHint](https://jshint.com/) was used to test the JavaScript code.  
  
### Bugs Discovered  
- _Problem with Modals_: By default, bootstrap modals are programmed to close when the user clicks outside them or presses the ESC key. This feature has been inhibited to avoid breaking the game.  
- _Negative Score_: Initially, the score was calculated by adding points for each correct choice and removing them for each wrong choice, potentially causing a negative score. This was modified to make the minimum score 0.
- _Top Scores Order_: Initially, it could occur that by achieving the top scores in a specific sequence, they were shown in the wrong order (specifically the highest score was shown in second place). This was caused by an oversight in the JavaScript code, which was subsequently fixed.  
  
## Deployment  
  
This project was developed on [GitPod](https://www.gitpod.io/), committed to [Git](https://git-scm.com/) and pushed to [GitHub](https://github.com/) using the Gitpod Terminal.  
  
To deploy Hangman to GitHub Pages from its [GitHub repository](https://github.com/Dom-888/Second-Milestone-Project), the following steps were taken:  
1. Log in to Github  
2. Select the repository you want to deploy  
3. Under the repository name, click **Settings**.  
4. Under "GitHub Pages", use the Source drop-down menu and select the master branch.  
5. The message "Your site is ready to be published at *Link* will  
appear under Github Pages.  
  
### How to run this project locally  
  
In case you want to pull the code from my Github repository:  
1. Log in to Github,  
2. Follow [this](https://github.com/Dom-888/Second-Milestone-Project) link to the project repository.  
3. Under the repository name, click **Clone or download**.  
4. To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **Use SSH**, then click the clipboard icon.  
5. Open Git Bash.  
6. Change the current working directory to the location where you want the cloned directory to be made.  
7. Type git `clone`, and then paste the URL you copied in Step 3.  
8. Press **Enter**. Your local clone will be created.  
  
  
## Credits  
  
### Code  
  
- The code to center the page vertically is from [this](https://medium.com/wdstack/bootstrap-4-vertical-center-1211448a2eff) article.  
  
### Media  
  
- The background image was created by _Hello-Pixel_ and was downloaded from [Freepik](https://www.freepik.com/).  
- The "Pop" sound was created by _Greenvwbeetle_ and was downloaded from [Freesound](https://freesound.org/).  
- The "Success" sound was created by _Shinephoenixsto_ and was downloaded from [Freesound](https://freesound.org/).  
- The image of the kid with the balloons was created by the author starting from [this](https://paintingvalley.com/family-drawing-stick-figures#family-drawing-stick-figures-2.jpg) image.  
  
### Acknowledgments 
  
- I received assistance, feedback and encouragement from my mentor [Seun Owonikoko](https://github.com/seunkoko).  
- I received help and suggestions from [Code Institute](https://codeinstitute.net/) tutors.  
- The project code has been reviewed by the [Code Institute](https://codeinstitute.net/) Slack community.  
- This project takes inspiration from [PicFlip!](https://ajgreaves.github.io/picflip/) by [Anna Greaves](https://github.com/AJGreaves).  
  
<br>  
  
#### Disclaimer  
  
The content of this website is provided for educational purposes only.

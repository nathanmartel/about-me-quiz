# about-me-quiz

# Lab 01: About Me
## Goal
Create an "About Me" page, with a quiz based on the content of the page that the user can complete.
## Setup 
**If you have any lingering issues with setup or functionality of your laptop and the software installations, please find us to address that right away!**
Refer to the `/how-to` folder for project setup. It includes instructions on:
1. Creating the repository and branching for each day's work
1. Project folder/file setup as well as stock config files
1. Structure for main JavaScript `app.js` file
---
## Topic
The topic can be autobiographical ("About Me") or you are welcome to pick a common topic of interest (for example, "cats" or "pets") and create content and images around that theme.
Your web page should contain:
* Introductory and general content about you or your theme.
* At least one image
* At least three sections, each of which is a blurb about you or the topic
* Include headers as appropriate
* Use at least one unordered (bullet) list and one ordered (numbered) list
* A button for the user to take a quiz, and a place to put the quiz result
---
## HTML & CSS
1. Create an HTML file (`index.html`)
1. Create and link a CSS file (`main.css`)
1. Add content to your HTML file including all the required sections listed
1. Add CSS for styling for your page and some layout. See below for styling detail
1. **Commit** your work as you go with a message that describes the purpose (why?) of the commit.

### Styles
1. Choose one or two fonts for your page. Often the headers and body content use separate fonts:
    * https://fonts.google.com/
    * https://www.fontsquirrel.com/
1. Choose a color palette/theme for your page:
    * https://www.colourlovers.com/
    * http://colormind.io/
    * https://coolors.co/
1. Need some images?
    * https://pixabay.com
    * https://www.freeimages.com/
    * https://unsplash.com/
    * https://www.pexels.com/royalty-free-images/
### Design Stretch Goals
- Apply additional styling to the page: try things like borders, alignment, margin, padding, and so on.
- Search for an online HTML validator and submit your code to it.
- Visit [this page](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and read about Chrome's built-in accessibility auditing tools. Following the instructions under the "View the contrast ratio of a text element in the Color Picker" heading, examine the contrast ratio values of your heading and paragraph tags. Modify your code until you can achieve a ratio that gets two check marks.
---
## JavaScript
### TDD `isYes` Function
The quiz will be asking yes/no questions, but receiving a text response from the user. They could response "Yes", "y", "yes", "Y", etc.
TDD an `isYes` function that that returns `true` for the responses you want to be "yes" (otherwise it should return `false`). Write a test for each "yes" text that your app will accept. Then write a couple tests for common "no" responses. 
The function:
1. Should be exported from `/src/is-yes/js`
1. The test should live at `/test/example.test.js`
### App
Add an `app.js` file that is imported via a `<script>` tag in `index.html`.
#### Sections
1. Imports:
    - Your `isYes` function
1. Reference needed DOM elements:
    - The button the user will click for taking the quiz
    - The element to which you will write the quiz results
1. Add event listeners:
    - Subscribe to the button's click event using `addEventListener`:
    ``js
    button.addEventListener('click', () => {
    });
    ``
    - Add code in the button click handler function:
1. Ask the user's name. Their name should be used in subsequent prompts
1. Confirm that the user really wants to take the quiz. If not, `return` from your function.
1. Three YES/NO questions about you. Use your `isYes` function to determine the user's
response, then compare to the correct answer. Track number of correct responses.
1. Alert the user that the quiz is complete and their results will now be written to the webpage.
1. Write a response to the page with their name and number correct, for example: "Okay Bernice, you got 2/3 correct".
1. STRETCH goal(s):
  - Add a class to style the result differently based on
  good or bad score
  - Include a percentage, without decimal places.

## Points Break Down
Looking For | Points (10)
| --- | ---: |
Proper HTML using Semantic Element choices  | 1
CSS fonts, colors and images used consciously and correctly | 1
Tested isYes Function | 2
Guessing game works correctly | 2
Project and code files are: indented / spaced correctly / clean | 2
Clear commit history present | 2
Augmented display of results message | +1
Percent correct with no decimal places | +1
# Github Project

This project uses the GitHub REST API (v3) to display a list of the top 100 most starred Github repositories as cards. When you press 'Flip Card', it will show a list of the commits made in the last 24 hours. If you press 'Flip Card' again, it'll go back to the repository view for that card.

### **To reviewers**:

I chose to implement React hooks as well as the context API to demonstrate my knowledge and skil in managing global state and local state. I believe this application is simple enough that I could have gotten away with just using local state and not using the context API, however I wanted to show my knowledge of both and chose to implement the context API in this application. I am happy and comfortable with or without it!

## What I would do with more time:

- More robust testing.
- Refactor some of the re-used pieces of logic for commits and repos.
- Maybe make it so that if you flip a new card to see the commits, if one card is already flipped, turn that card back over to the Repo view.
- Some better styling for user experience - maybe a more obvious loading state, and a 'flip' animation for the card.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

## Screenshots/Gif

![Screen Shot 2021-08-11 at 9 01 04 PM](https://user-images.githubusercontent.com/22547367/129127173-d466f6e1-4372-4d57-8248-82ad25676690.png)
![Screen Shot 2021-08-11 at 9 01 14 PM](https://user-images.githubusercontent.com/22547367/129127179-10accc3d-8d60-45fd-ad24-1cf9c6d17861.png)
![appinaction](https://user-images.githubusercontent.com/22547367/129127181-28c33bed-9315-46b0-a5ab-45fc857d6f20.gif)

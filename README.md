# Space Cadet

[Space Cadet](https://space-cadet.netlify.app/) Version: 1.0

## Description

Space Cadet is a modern take on NASA's infamous Astronomy Photo of the Day website, joined with a gallery of images from various Mars exploration missions.

Built using React JS and styled with the React Bootstrap and React Masonry CSS libraries.

Version 1.0 is simple and is currently lacking the user interactivity that I aim to implement in future versions. See the future version features section for a glimpse of what's to come.

## Technologies Used

###### Code Editor
- [VS Code](https://code.visualstudio.com/)

###### Main Framework
- [React JS](https://github.com/facebook/react/)

###### Styling Libraries
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [React Masonry CSS](https://github.com/paulcollett/react-masonry-css)

## Getting Started

###### Installation

1. Fork and Clone the [project-2](https://github.com/turekjesse/project-2) repository
    1. Click **fork** in the top right corner
    2. Select where you would like to fork the repo
    3. Once redirected to where you forked the repo, click the green **Code** button
    4. Copy the SSH url and clone this repo into the directory of your choice in your CLI using the code below
        ```git clone git@github.com:turekjesse/project-2.git```
    5. Change directories into the newly cloned repo and open in your code editor. For VS Code users, run ```code .``` in your CLI.
    6. To make sure you're up and running smoothly, change directories into the space-cadet directory, you should be here > ```.../project-2/space-cadet```
    7. From the space-cadet directory enter ```yarn start``` in your CLI to run the react app in the browser.

2. Install Dependencies 
- [React Router DOM](https://github.com/ReactTraining/react-router)
    - yarn: ```yarn add react-router-dom```
    - npm: ```npm install react-router-dom```
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
    - yarn: ```yarn add react-bootstrap bootstrap@4.6.0```
    - npm: ```npm install react-bootstrap bootstrap@4.6.0```
- [React Router Bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
    - yarn: ```yarn add react-router-bootstrap```
    - npm: ```npm install -S react-router-bootstrap``` 
- [React Masonry CSS](https://github.com/paulcollett/react-masonry-css)
    - yarn: ```yarn add react-masonry-css```
    - npm: ```npm install react-masonry-css```

3. Receive an API key from [NASA](https://api.nasa.gov/)

## Contributions

For contributions to space cadet, report any bugs, or solutions to bugs please submit a new issue ticket in this repo. 

Some currently known bugs are:
- Resetting the form state to null after Rover Sol query submission
- Sol submission value carries through to next selected rover in the nav dropdown.

## Future Version Features

- [] Form functionality to query APODS by specific date and/or date range
- [] Carousel functionality to go to previous/next APOD on detail view
- [] Form functionality to query Rovers by Sol and Camera View
- [] Rover photo detail view
- [] Fullscreen view of HD photos
- [] Dark & light theme switch 
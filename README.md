# Red Badge Final Project - For The Coilture App - Client

## Overview

This PERN project is an online community app celebrating the beauty, resilience, and diversity of natural hair in the African Diaspora. Here members can browse different hair pictures, view hair tutorials, and create their own hair tutorials for others. This app is designed for people who are in love or who are falling in love with their natural hair, whose expertise levels range from beginner to advanced. This will be a community space for all enthusiasts of the natural hair movement.

On the client side, users will be able to browse through and create hair tutorials. Users can also leave comments on the tutorials. User roles are implemented so that users can only edit/delete their own tutorials.

## Install Dependencies

Install the following dependencies

-react
-react-dom
-react-router
-react router-dom
-STYLING LIBRARY OF CHOICE (here I've used Material-UI)

## Demo

SignIn
![](images/signIn.png)

SignUp
![](images/signUp.png)

HomePage
![](images/homePage.png)

MyTutorials
![](images/myTutorials.png)

Creating a Tutorial
![](images/createTutorial.png)

ViewTutorial
![](images/viewTutorial.png)

Editing a Tutorial
![](images/editTutorial.png)

Deleting a Tutorial
![](images/deleteTutorial.png)

AboutPage
![](images/aboutPage.png)

Editing a Comment
![](images/editComment.png)

Deleting a Comment
![](images/deleteComment.png)

## Code Example

![](images/clientCodeExample.png)

In this example, I've used a ternary to conditionally render an element on the page (a button). The ternary is checking whether the user has a role of "Admin" or if the user's id matches with the userId of the tutorial. If either of these conditions are met, the delete button will render and will run the handleDelete function when pressed. If neither of these conditions is met, a disabled Delete button is rendered on the page.

## Run the client side in the browser

To run the client in the browser open the client terminal and type in 'npm start'

## Tech/Framework Used

Material UI Styling Library
-used to style containers and other elements

React
-Use class (state) and functional(non-state) components
-Implement routing from parent components
-Create user roles
-Post and retrieve data from the server

GitHub
-Create server and client repositories
-Deploy to GitHub

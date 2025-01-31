# NetflixGPT 
- Create react app
- configured tailwind
- Header
- Routing of App
- Login Form
- Sign up form
- Form validation
- useRef hook
- firebase setup
- deploying our app to production
- create signup user account in firebase
- register & sign in the user into firebase using firebase authentication api.
- now setup the redux store using
    npm i -D @reduxjs/toolkit
    npm i react-redux
- created redux store with userSlice
- go to Manage Users in Firebase and use onAuthStateChanged Api given by firebase 
- implmented updateUserProfile api
- implemented signout
- fetch movies from TMDB(api database for movies) movies

# Features
- Login/Signup
     - sign in sign up forms
     - redirect to Browse page
- Browse (Only comes after authentication (after login))
      - Header
      - Main movie
            - Trailer in the background
            - movie title & description
            - Movie suggestions
                  - movie lists

   # NetflixGpt   
   - Search Bar
   - Movie suggestions  

   # Shortcut to create component
   - type rafce in component file and then hit enter        


   # Formic Library
   -Used  for validations in forms (used for big application)  

   # Deploy our app on firebase
   - Install firebase in our project using
      npm install firebase
   - Install firebase CLI
     npm install -g firebase-tools
  
  - run command
   - firebase login
  - firebase init -
  What do you want to use as your public directory? (public)  >  name it as- build

Now build the project uusing
 - npm run build

deploy using below command
- firebase deploy
https://netflixgpt-aa0b9.web.app/ (my hosting url)
# linkodcode Server side

Managing the HTTP requests of the linkodcode website

## Details

There are 2 types of requests

* Endpoint /users for managing users
* Endpoint /post for managing posts

## Managing users

* /register

You can register with the system

* /Login

Registered users can register using this path

And when registering/logging in to the system, it enters a token in cookie so that we can verify the user before each request

## Managing posts

* /getAll

This path returns all posts to the client

* /:id

This path searches among all posts to see if there is a post with the id attached to the path

If it finds one, it returns the appropriate post, and if not, it returns an error

* /addPost

This path receives the text of the new post in the body, as well as the attached image, it receives it using the multer library and puts it into the public/images folder
and adds the new post + the image name to the list of posts

All post paths are protected by middleware that checks whether the user has a suitable token in cookie 

## run

To run the site, run in the server folder

```
npm start
```

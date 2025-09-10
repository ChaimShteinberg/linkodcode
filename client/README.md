# linkodcode Client side

This section handles the entire frontend of the linkodcode website

## Details

Pages on the website

The website is divided into 4 pages
* Home
* Post
* addPost
* login

### homepage

This page displays all the posts written on the website, one below the other

### post page

By clicking on a post on the homepage, you are transferred to this page, which displays only the selected post

### add post page

There is a button on the homepage that, when clicked, takes you to this page where you can add a post to the system by filling in the form with the relevant details

And by clicking submit, the form is added to the top of the list of posts on the homepage and you are transferred to the homepage

### Login page

On this page, you can register/login to the system

As detailed on the server side, all requests are protected by the token for those who are not registered in the system
When attempting to perform an operation in the system without a suitable token, you are automatically transferred to this page

## Run

To run the website, run in the terminal Inside the client folder

```
npm i
npm run build
```


## Folder structure

```
[client]
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── [public]
        └── logo.png
    ├── README.md
    ├── [src]
        ├── [api]
            ├── posts.ts
            └── users.ts
        ├── App.css
        ├── App.tsx
        ├── [assets]
            ├── [icons]
                └── like.svg
            └── [images]
                └── IMG-20230206-WA0001.jpg
        ├── [components]
            ├── [application-layout]
                ├── Content.tsx
                ├── Header.tsx
                └── Navbar.tsx
            ├── FormSection.tsx
            ├── Like.tsx
            └── Post.tsx
        ├── index.css
        ├── [interfaces]
            └── post.interface.ts
        ├── main.tsx
        ├── [pages]
            ├── AddPostPage.tsx
            ├── Homepage.tsx
            ├── LoginPage.tsx
            └── PostPage.tsx
        ├── [services]
            ├── post.service.ts
            └── users.service.ts
        ├── [styles]
            ├── addPostPage.css
            ├── Content.css
            ├── formSection.css
            ├── header.css
            ├── homepage.css
            ├── like.css
            ├── LoginPage.css
            ├── navbar.css
            ├── post.css
            └── PostPage.css
        └── vite-env.d.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

```

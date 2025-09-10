# linkodcode

The place of Kodcode to keep in touch

## Description

A site for uploading Kodcode program posts by graduates to keep in touch even after graduation

This project is divided into 2 projects
* Server
* Client


Each part can be seen in its README file for details

## Folder structure

```
[server]
    ├── .gitignore
    ├── app.js
    ├── package-lock.json
    ├── package.json
    ├── [public]
        └── [images]
    ├── README.md
    └── [src]
        ├── [assets]
            ├── posts.json
            └── users.json
        ├── [controllers]
            ├── posts.controller.js
            └── users.controller.js
        ├── [dal]
            ├── post.dal.js
            └── users.dal.js
        ├── [middlewares]
            └── auth.middleware.js
        ├── [routes]
            ├── auth.route.js
            └── posts.route.js
        └── [services]
            ├── posts.service.js
            └── users.service.js

```

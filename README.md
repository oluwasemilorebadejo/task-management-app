# task-management-app
Basic task management app in Node.js using the Express framework and an in-memory database to store tasks

## Task Management App
A simple web app for managing tasks.

### Requirements
- Node.js 10+
- npm 6+

### Installation
1. Clone the repository:
```git clone https://github.com/user/task-app.git
```
2. Install dependencies:
`cd task-app
npm install
`
3. Start the app:
`npm start
`

The app will be running at http://localhost:3000.

### Usage
The task management app provides a simple RESTful API for managing tasks.

### Get all tasks
`GET /tasks
`
### Response
`200 OK
[
  {
    "id": "1",
    "title": "Learn Node.js",
    "completed": false
  },
  {
    "id": "2",
    "title": "Write documentation",
    "completed": true
  }
]`
### Add a new task
`POST /tasks
{
  "title": "Learn Node.js",
  "completed": false
}
`
### Response
`201 Created
{
  "id": "1",
  "title": "Learn Node.js",
  "completed": false
}
`
### Update an existing task
`PUT /tasks/1

{
  "title": "Learn Express",
  "completed": true
}
`
### Response 
`200 OK
{
  "id": "1",
  "title": "Learn Express",
  "completed": true
}
`
### Delete an existing task
`DELETE /tasks/1
`
### Response 
`200 OK
{
  "id": "1",
  "title": "Learn Express",
  "completed": true
}
`

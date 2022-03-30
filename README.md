
# EPEK Assignment

It is an issue raising application.

## Tech Stack Used

 - Frontend
   - ReactJS
   - HTML5
   - CSS3
   - Material UI
 - Backend
   - MongoDB
   - express
   - Node

## Instructions to follow in CLI 

 - Backend
   - npm install
   - npm start
 - Frontend
   - npm install
   - npm start
 

## Screenshots

![App Screenshot](https://i.ibb.co/0ZnFLrr/1.png)

![App Screenshot](https://i.ibb.co/BjQdHS5/2.png)



## API Reference

#### Get all items

```http
  GET /api/issue
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api` | `string` | **Required**. Your API |

#### Get item

```http
  GET /api/issue/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Post item

```http
  POST /api/issue/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api`      | `string` | **Required**. Creates a payload of issue |


#### Patch item

```http
  PATCH /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of issues to fetch and update |


#### Delete item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of issues to fetch and delete |


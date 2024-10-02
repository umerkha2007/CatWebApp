
# Cats in React and NodeJS

This is a sample project for storing details of a cat in JSON file and returning that back in api. There is both frontend and backend for this project.


## API Reference

#### Get all items

```http
  GET /cats/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  |  |

#### Return the List of all cats

```http
  GET /cats/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of cat to fetch |


Takes the id and returns that specific cat


```http
  POST /cats/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of the cat |
| `age`      | `number` | **Required**. age of the cat |
| `adoption_status`      | `string` | **Required**. adoption status of the cat |
| `photo`      | `string` | **Required**. filename of the photo |


{
      "name": "sushi",
      "age": "200",
      "adoption_status": "adopted",
      "photo": "1.webp"
}


Takes the details of the cat and stores it in a json file


```http
  DELETE /cats/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of cat to remove |


Takes the id and removes that specific cat from the json file







## Demo

![screencapture-localhost-5173-2024-10-02-10_39_44](https://github.com/user-attachments/assets/86ff1ee9-aa46-4840-a770-a2bf41f52a81)



# Vidly
### API Endpoints
#### Add new genre
Request :
```
Uri: POST /api/genres

  {
    "id": "1",
    "name": "drama"
 }
 ```
 
 Response:
 ```
  {
    "id": 1,
    "name": "drama"
  }
  ```
  #### GET all genres
Request :
```
Uri: GET /api/genres
```
 
 Response:
 ```
  {
    "id": 1,
    "name": "drama"
  },
  {
    "id": 2,
    "name": "horror"
  }
  ```
  
  #### GET genre by ID
Request :
```
Uri: GET /api/genres/:id

  {
    "id": "1",
 }
 ```
 
 Response:
 ```
  {
    "id": 1,
    "name": "drama"
  }
  ```
#### Update a genre
Request :
```
Uri: PUT /api/genres/:id

  {
    "id": "1",
    "name": "fantasy"
 }
 ```
 
 Response:
 ```
  {
    "id": 1,
    "name": "fantasy"
  }
  ```
  #### Delete a genre 
Request :
```
Uri: PUT /api/genres/:id

  {
    "id": "1",
 }
 ```
 
 Response:
 ```
  {
    "id": 1,
    "name": "fantasy"
  }
  ```
  

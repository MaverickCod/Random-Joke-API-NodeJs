# Joke and Random Image API

This project is an Express.js application that provides two endpoints: one to fetch a random joke and another to fetch a random image URL from the Unsplash API. The application uses Axios for making HTTP requests and dotenv for managing environment variables.

## Table of Contents

- Installation
- Configuration
- Usage
- API Endpoints
- License

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/MaverickCod/Random-Joke-API-NodeJs
    ```

2. **Navigate to the project directory**:

    ```bash
    cd joke-image-api
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

## Configuration

Before running the application, create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
API_KEY= "your_api_ninjas_key_here"
UNSPLASH_API_KEY= "your_unsplash_api_key_here"
```

Replace `your_api_ninjas_key_here` and `your_unsplash_api_key_here` with your actual API keys.

## Usage

To start the server, use the following command:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is `3000`).

## API Endpoints

### 1. Get a Random Joke

- **Endpoint:** `/api/jokes/random`
- **Method:** `GET`
- **Description:** Fetches a random joke from the API Ninjas Jokes API.

#### Example Request:

```bash
GET /api/jokes/random
```

#### Example Response:

```json
[
  {
    "joke": "Why don't skeletons fight each other? They don't have the guts."
  }
]
```

### 2. Get a Random Nature Image URL

- **Endpoint:** `/api/joke-image/random`
- **Method:** `GET`
- **Description:** Fetches a random nature image URL from the Unsplash API.

#### Example Request:

```bash
GET /api/joke-image/random
```

#### Example Response:

```json
{
  "id": "Dwu85P9SOIk",
  "url": "https://images.unsplash.com/photo-1494526585095-c41746248156"
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

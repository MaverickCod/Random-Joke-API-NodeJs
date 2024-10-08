import axios from "axios";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/jokes/random", async (req, res) => {
  try {
    const response = await axios.get("https://api.api-ninjas.com/v1/jokes", {
      headers: {
        "X-Api-Key": process.env.API_KEY,
        "Content-Type": "application/json",
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error(
      "Error details:",
      err.response ? err.response.data : err.message
    );
    res.status(500).json({
      error: "An error occurred while fetching jokes",
      details: err.response ? err.response.data : err.message,
    });
  }
});

app.get("/api/joke-image/random", async (req, res) => {
  try {
    const imageResponse = await axios({
      method: "get",
      url: `https://api.unsplash.com/photos/random?query=nature&client_id=${process.env.UNSPLASH_API_KEY}`,
      headers: {
        Accept: "application/json",
      },
    });

    const imageUrl = {
      id: imageResponse.data.id,
      url: imageResponse.data.urls.regular,
    };

    res.json(imageUrl);
  } catch (err) {
    console.error("Error details:", err.response ? err.response.data : err.message);
    res.status(500).json({
      error: "An error occurred while fetching the image",
      details: err.response ? err.response.data : err.message,
    });
  }
});


app.listen(port, () => {
  console.log("Server started at " + port);
});

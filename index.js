const runAPI = `
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Get all resources
app.get("/", async (req, res) => {
  try {
    // Write logic to retrieve a list of resources
    res.status(200).json({
        message: "Retrieved all resources",
    });
  } catch (error) {
    // Catch errors
    res.status(500).json({
        error: "Something went wrong",
    });
  }
});

// Get resources with specific ID
app.get("/:id", async (req, res) => {
    try {
      // Write logic to retrieve resources
      res.status(200).json({
        message: \`Retrieved resource with ID \${req.params.id}\`,
      });
    } catch (error) {
      // Catch errors
      res.status(500).json({
        error: "Something went wrong",
      });
    }
  });

app.post("/", async (req, res) => {
  try {
    // Write logic to create a new resource
    const { name, description } = req.body;

    // Logic to create a new resource
    res.status(201).json({
      message: "Resource created successfully",
      data: { name, description },
    });
  } catch (error) {
    // Catch errors
    res.status(500).json({
        error: "Something went wrong",
      });
  }
});

app.put("/:id", async (req, res) => {
  try {
    // Destructuring data from request body
    const { name, description } = req.body;

    // Logic to update an existing resource
    res.status(200).json({
      message: \`Resource with ID \${req.params.id} updated successfully\`,
      data: { name, description },
    });
    // Write logic to update an existing resource
  } catch (error) {
    // Catch errors
    res.status(500).json({
        error: "Something went wrong",
      });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    // Write logic to delete a resource by ID
    res.status(200).json({
        message: \`Resource with ID \${req.params.id} deleted successfully\`,
      });
  } catch (error) {
    // Catch errors
    res.status(500).json({
        error: "Something went wrong",
      });
  }
});

app.listen(PORT, () => {
    console.log('Server is Running on Port: https://localhost:3000');
});
`;

module.exports = runAPI;

// This function will handle fetching repositories.
// /api/github.js
// const fetch = require("node-fetch");

// module.exports = async (req, res) => {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/amirhosseinolyaei/repos",
//       {
//         headers: {
//           Authorization: `token ${process.env.GITHUB_TOKEN}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`GitHub API responded with status ${response.status}`);
//     }

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching repositories:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/amirhosseinolyaei/repos",
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching repositories:", error);
    // Axios wraps the response error in error.response
    if (error.response) {
      // You can access more detailed info from the error response
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

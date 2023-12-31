// This function will handle fetching repositories.
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const response = await fetch(
    "https://api.github.com/users/amirhosseinolyaei/repos",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
};

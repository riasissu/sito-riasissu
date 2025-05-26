const functions = require("firebase-functions");
const cors = require("cors")({origin: true});

exports.passwordProtectedPage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const password = req.query.password;

    if (!password) {
      return res.status(400).json({error: "Password required"});
    }

    const correctPassword = "Xcool_Udine_2025";

    if (password === correctPassword) {
      return res.json({redirectUrl: "https://forms.office.com/e/KfpnEWdDwv"});
    } else {
      return res.status(403).json({error: "Incorrect password"});
    }
  });
});

exports.passwordProtectedPageTeam = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const password = req.query.password;

    if (!password) {
      return res.status(400).json({error: "Password required"});
    }

    const correctPassword = "Xcool_Udine_2025";

    if (password === correctPassword) {
      return res.json({redirectUrl: "https://forms.office.com/e/Z5zitkZLGv"});
    } else {
      return res.status(403).json({error: "Incorrect password"});
    }
  });
});

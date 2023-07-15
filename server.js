const express = require('express');
const app = express();
const port = 3001;

// Define a route to generate voice
app.get('/generate-voice', (req, res) => {
  const { text } = req.query;
  const audioUrl = `http://responsivevoice.org/responsivevoice/getvoice.php?t=${encodeURIComponent(text)}&tl=en-US`;

  res.redirect(audioUrl);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

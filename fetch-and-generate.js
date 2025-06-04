const fs = require('fs');
const fetch = require('node-fetch');
const Papa = require('papaparse');

// Replace this with your actual spreadsheet CSV URL
const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSN2_ZC3o4TgrwkwXoa2VQMa7VhluefQiSPhnRNb74fnWmAJG8zIWj9n3vZ2crJYrXGjmO2gP17h-oC/pub?output=csv';

(async () => {
  try {
    const response = await fetch(csvUrl);
    if (!response.ok) throw new Error("Failed to fetch CSV");
    const csvText = await response.text();

    const { data } = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    const jsContent = `window.submissionsData = ${JSON.stringify(data, null, 2)};`;

    fs.writeFileSync('submissions.js', jsContent);
    console.log('submissions.js updated successfully!');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();

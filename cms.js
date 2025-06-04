fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSN2_ZC3o4TgrwkwXoa2VQMa7VhluefQiSPhnRNb74fnWmAJG8zIWj9n3vZ2crJYrXGjmO2gP17h-oC/pub?output=csv")
  .then(res => res.text())
  .then(csv => {
    document.body.innerHTML = `<pre>${csv}</pre>`;
  })
  .catch(err => {
    document.body.innerHTML = `<p style="color:red;">Fetch failed: ${err.message}</p>`;
  });

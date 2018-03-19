const port = process.env.PORT || 8080;

const app = require('./app');

app.listen(port, function () {
  const host = this.address().family === 'IPv6' ? '[' + this.address().address + ']' : this.address().address;
  console.log(`app listening at http://${host}:${this.address().port}`);
});

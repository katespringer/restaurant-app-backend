module.exports = ({ env }) => ({
  url: env('https://kate-springer-restaurant-app.herokuapp.com/'),
  proxy: true,
  app: {
    keys: env('+bnMqMhCI2P/0thk76m/TjHczIz+rRmh+yBOurVQViM=')
  },
});
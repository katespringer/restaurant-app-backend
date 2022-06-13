module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["+bnMqMhCI2P/0thk76m/TjHczIz+rRmh+yBOurVQViM=", "U+p+s6LL0lhS+ly180yttDt1+i6M201Cq9Em5UZnOdE="]),
  },
});
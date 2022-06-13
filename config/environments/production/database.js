module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '@ec2-54-157-16-196.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd940dlhhh3nput'),
      username: env('DATABASE_USERNAME', 'iyyiwqnpkdwhwh'),
      password: env('DATABASE_PASSWORD', '467bed643d84f44038dd4c46643877fe93a1fbe13385e1fd175af4f66b9a030b'),
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
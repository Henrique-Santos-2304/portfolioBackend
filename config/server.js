module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3c608095350c9b6bbadccfb8f279c8fd'),
      url: env('URL_ADMINISTRATION'),
    },
  },
});

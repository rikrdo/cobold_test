module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/homepage',
        permanent: true,
      },
    ];
  },
};

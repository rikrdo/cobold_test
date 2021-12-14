module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
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

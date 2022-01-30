
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wBRRYpowRgf0ztQ4FHpj2e6kHEhyPVp4',
      accounts: ['87afbbbe2381c3a546d42a3a6fb78118c1f45e6145914e68ce6422252f350350'],
    },
  },
};
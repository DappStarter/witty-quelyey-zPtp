require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strike rival noble monkey grace sister army giggle'; 
let testAccounts = [
"0x35236a00b80d89e7afd2e65f3c26765fadf3ccbe7d051e813326481263483f64",
"0xcdba75058546a722c55f57f2f4c5d6cae972fe8e153265315b920c85356a2de3",
"0x81026f17bd88e506d78a3acd44b842e5c85d2aad92deb397a6ee7cd86e2ace2b",
"0x724535d684245b20e014fdb816f055dd0549fd9391cc6a23c801e751b0449fb6",
"0x989fd9e3e7d406ae4d52e20aeef909ae6b12e10717cf394d56b05dee974884a2",
"0xbf1c718a29f4371d794de7f636691efd1f2f060a1d8614786d179ec5abc74055",
"0x50b59d317cad0dd756a59b5a94eba5ac64fd30d64f7ff5991dd4d05a22b0475d",
"0x97f76ade96757a1e1f7d9e2cf56e503b70682f3793722c609ca4f649ba91f0de",
"0x46901d5d73ca5c635b12c2a65edb0a03743c4f00e94c8452b27c5f65d1d57e1b",
"0xcb34463c1e279ff4b16acdc86e8da792452ecde2d08c237569daa9c90618b85f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


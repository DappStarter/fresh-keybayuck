require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stove razor tortoise equip just prison suspect gate'; 
let testAccounts = [
"0x16e8f6d52f754ff89be0a71a1e00aaf66c1df2c9bc8df86bed79b4b3598b55ec",
"0x31863ef183cce27dee12290751bb6220328fbf4a20ff70e78a4f2732d18cae3c",
"0x5a05c5116299ae58b6aac3631aeb6c323737b74e086e05214d01ffbf9a1e73e2",
"0x6c0d1e168c53a0f63f48fe5dd083aff71588f76982fe7fcef0ad0fd085092630",
"0x13b68e5cf3381a26f6b21d1b0319203954057d85e06a9cc518e94c39ef4c2b1f",
"0xb0ff9c02dd66a93cd4f01ec238b6c12b4cbbf0554cd4641f58f4480d5ce5565e",
"0x7425907443f2032a7d0b332bcf5ec1270feca238bbd7cb2f0cb76dd6e06e188c",
"0xa4fe00b30271871effcbb59c8ae2d803f97c9ccd0f3a9c59af92e3a9c3e0129e",
"0x1bc2475de6517dd25adf7bdec01f025ca354ae7b317ae8357f2f00c1eb51e235",
"0xd30cef749a594c2281c98d305c7cdbedeb4e1f4adfdf5be1218ca89740200056"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
            version: '^0.5.11'
        }
    }
};

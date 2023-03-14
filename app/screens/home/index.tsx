import {bufferToHex} from 'ethereumjs-util';
import HDKey from 'hdkey';
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Web3 from 'web3';

const Home = () => {
  const [seed, setSeed] = useState(
    'meadow_sad_parrot_fog_alcohol_summer_reason_stone_success_insane_damp_wisdom',
  );

  const [balance, setBalance] = useState(null);

  const handleGetBalance = async () => {
    console.log('>>>  here');
    debugger;
    const hdkey = HDKey.fromMasterSeed(Buffer.from(seed, 'hex'));
    const path = "m/44'/60'/0'/0/0"; // Ethereum derivation path
    const wallet = hdkey.derive(path).getWallet();
    const privateKey = bufferToHex(wallet.getPrivateKey());
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
      ),
    );
    const address = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const balance = await web3.eth.getBalance(address);
    console.log('>>>  balance', {balance});
    setBalance(balance);
  };

  return (
    <View>
      <TextInput placeholder="Enter recovery seed" onChangeText={setSeed} />
      <Button title="Get Balance" onPress={handleGetBalance} />
      {balance !== null && (
        <Text>{`ETH Balance: ${web3.utils.fromWei(balance)}`}</Text>
      )}
    </View>
  );
};

export default Home;

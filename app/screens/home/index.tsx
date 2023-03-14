// Pull in the shims (BEFORE importing ethers)
import '@ethersproject/shims';

// Import the ethers library

import {fromByteArray} from 'base64-js';
import bip39 from 'bip39';
import {toChecksumAddress} from 'ethereumjs-util';
import hdkey from 'ethereumjs-wallet/dist/hdkey';
import {ethers} from 'ethers';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Web3 from 'web3';

import useAlturaNetInfo from '../../hook/useAlturaNetInfo';

const web3 = new Web3();

export default function Home() {
  const [mnemonic, setMnemonic] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [balance, setBalance] = useState('');
  useAlturaNetInfo();
  const handleMnemonicChange = text => {
    setMnemonic(text);
  };

  const handleGenerateWallet = () => {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const seedBase64 = fromByteArray(seed);
    const seedBuffer = new Uint8Array(
      seedBase64.match(/.{1,4}/g).map(bin => parseInt(bin, 16)),
    );
    const root = hdkey.fromMasterSeed(seedBuffer);
    const addrNode = root.derivePath("m/44'/60'/0'/0/0");
    const privateKeyBuffer = addrNode.getWallet().getPrivateKey();
    const privateKey = privateKeyBuffer.toString('hex');
    setPrivateKey(privateKey);

    const addressBuffer = addrNode.getWallet().getPublicKey();
    const address = toChecksumAddress(`0x${addressBuffer.toString('hex')}`);
    web3.eth.getBalance(address).then(balance => {
      setBalance(web3.utils.fromWei(balance, 'ether'));
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Enter your 12-word recovery seed phrase:</Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 5,
        }}
        onChangeText={handleMnemonicChange}
        value={mnemonic}
      />
      <Button title="Generate Wallet" onPress={handleGenerateWallet} />
      {privateKey ? <Text>Private Key: {privateKey}</Text> : null}
      {balance ? <Text>Wallet Balance: {balance} ETH</Text> : null}
    </View>
  );
}

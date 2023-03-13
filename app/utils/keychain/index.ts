import * as Keychain from 'react-native-keychain';

// https://github.com/oblador/react-native-keychain#unit-testing-with-jest

// Store the pin in the keychain
export const storePin = async (pin: string) => {
  const username = 'Altura'; // <== This can be saved in an environment variable to make it more secure
  const stored = await Keychain.setGenericPassword(username, pin);
  return stored;
};

// Retrieve the credentials
export const retrievePin = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log('Credentials successfully loaded for user ', {credentials});
      return credentials;
    }
    return null;
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
    return null;
  }
};

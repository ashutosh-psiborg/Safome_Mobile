import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
  
GoogleSignin.configure({
    webClientId: '48378243530-lia41hcf02f8ip26t658lphv7mpbtoc4.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
    // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

const RegisterScreen = () => {
    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            console.log("resp----",response,'data',response)
          if (isSuccessResponse(response)) {
            setState({ userInfo: response.data });
          } else {
            // sign in was cancelled by user
          }
        } catch (error) {
          if (isErrorWithCode(error)) {
            switch (error.code) {
              case statusCodes.IN_PROGRESS:
                // operation (eg. sign in) already in progress
                break;
              case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                // Android only, play services not available or outdated
                break;
              default:
              // some other error happened
            }
          } else {
            // an error that's not related to google sign in occurred
          }
        }
      };
  return (
      <View>
          <TouchableOpacity onPress = {signIn}>
              <Text>google sign in</Text>
              </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

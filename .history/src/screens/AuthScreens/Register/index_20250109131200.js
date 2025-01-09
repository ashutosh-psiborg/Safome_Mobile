import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId:'48378243530-lia41hcf02f8ip26t658lphv7mpbtoc4.apps.googleusercontent.com ', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
//     //iosClientId: '48378243530-vv0vl01vec0n9eh0bjeefs54q0ncfs0f.apps.googleusercontent.com',
//   //androidClientId : '48378243530-lia41hcf02f8ip26t658lphv7mpbtoc4.apps.googleusercontent.com  '// [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });
const configGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      "279947723368-btl11pfv71scj1hs4nga0pllpb99cq72.apps.googleusercontent.com",
  });
};

useEffect(() => {
  configGoogleSignIn();
}, []);

const RegisterScreen = () => {
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            console.log(response,response.data)
            if (response.idToken) {
                console.log("Sign-in successful:", response);
            } else {
                console.log("Sign-in was canceled by the user");
            }
        } catch (error) {
            console.error("Error during Google Sign-In:", error);
        }
    };
    
//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const response = await GoogleSignin.signIn();
//       console.log('resp----', response, 'data', response.data);
//       if (isSuccessResponse(response)) {
//         setState({userInfo: response.data});
//       } else {
//         // sign in was cancelled by user
//       }
//     } catch (error) {
//       if (isErrorWithCode(error)) {
//         switch (error.code) {
//           case statusCodes.IN_PROGRESS:
//             // operation (eg. sign in) already in progress
//             break;
//           case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
//             // Android only, play services not available or outdated
//             break;
//           default:
//           // some other error happened
//         }
//       } else {
//         // an error that's not related to google sign in occurred
//       }
//     }
//   };
  return (
    <View>
      <TouchableOpacity onPress={signIn}>
        <Text>google sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

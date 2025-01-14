import {View, Text, TouchableOpacity} from 'react-native';
import React , {useEffect} from 'react';
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


const RegisterScreen = () => {
             await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            console.log(response,response.data)
            
        } catch (error) {
            console.error("Error during Google Sign-In:", error);
        }
    };
    

  return (
    <View>
      <TouchableOpacity onPress={signIn}>
        <Text>google sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

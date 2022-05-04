import { StyleSheet, View } from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
     <Text h1>Entre com o Login!</Text>
     <Input
     placeholder="Email"
     leftIcon={{type:'font-awesome', name:'envelope'}}
     onChangeText={value => setEmail(value)}
     keyboardType="email-address"
     />
      <Input
     placeholder="Password"
     leftIcon={{type:'font-awesome', name:'lock'}}
     onChangeText={value => setPassword(value)}
     secureTextEntry={true}
     /> 
     <Button 
     icon={
       <Icon 
       name='check'
       size={15}
       color="#ffd100"
       />
     }
     title="Logar"
     onPress={()=>entrar()}
     />
    </View>
  );
}
// teste

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

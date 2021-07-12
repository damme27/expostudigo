import { AspectRatio, Center, Image, NativeBaseProvider } from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class SplashScreen extends Component {
   
    async componentDidMount(){
        const data = await this.navigateToHome();
        if(data != nukll){
            this.props.navigation.navigate('PhoneLogin')    
        }
    }
    navigateToHome = async () => {
        // Splash screen will remain visible for 2 seconds
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(2000).then(() => this.props.navigation.navigate('Login'))
        };
    render() {
        return (
        <View style={styles.container}>
            <NativeBaseProvider>
                <Center>
                    <Image
                        roundedTop="lg"
                        source={require('../assets/SplashScreen.png')}
                        alt="image"
                    />
                </Center>
            </NativeBaseProvider>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    });

export default SplashScreen

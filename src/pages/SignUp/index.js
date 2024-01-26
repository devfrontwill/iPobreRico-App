import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';

export default function SignUp() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useContext(AuthContext);

    function handleSignUp(){
        const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            user.user.uid
            setName('');
            setEmail('');
            setPassword('');
            alert('Conta criada com sucesso!');
            navigation.navigate('SignIn');

        })
        .catch((err) => {
            console.log(err);
            alert('Ops parece que algo deu errado, tente novamente ou entre em contato com o suporte.')
            return;
        })
    }

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled >                

                <AreaInput>
                    <Input
                        placeholder='Nome'
                        value={name}
                        onChangeText={ (text) => setName(text)}                        
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Seu email'
                        value={email}
                        onChangeText={ (text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Sua senha'
                        value={password}
                        onChangeText={ (text) => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton onPress={ handleSignUp } >
                    <SubmitText> Cadastrar </SubmitText>
                </SubmitButton>

            </Container>
        </Background >
    )
}
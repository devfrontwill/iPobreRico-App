import { useState } from 'react'
import { Platform} from 'react-native';
import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';


export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            user.user.uid
            console.log('Logado com sucesso!');
        })
        .catch((err) => {
            console.log(err);
            alert('Ops parece que algo deu errado, tente novamente ou entre em contato com o suporte.')
            return;
        })
        setEmail('');
        setPassword('');
    }

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

                <Logo
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={ (text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={ (text) => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
                    <SubmitText> Acessar </SubmitText>
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SignUp') } >
                    <LinkText> Criar uma conta ! </LinkText>
                </Link>

            </Container>
        </Background>
    )
}
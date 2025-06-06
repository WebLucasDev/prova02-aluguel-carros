import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export default function RegisterScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async () => {
        if (!nome || !email || !senha) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }
        try {
            await addDoc(collection(db, 'emails'), {
                nome,
                email,
                senha,
            });
            Alert.alert("Sucesso", "email cadastrado!");
            // Limpa os campos
            setNome('');
            setEmail('');
            setSenha('');
            // Navega para a tela de listagem
            navigation.navigate('ListScreen ');
        } catch (error) {
            Alert.alert("Erro", "Não foi possível cadastrar o email.");
            console.error("Erro ao adicionar documento: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Digite o nome" />
            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite o email" />
            <Text style={styles.label}>Senha:</Text>
            <TextInput style={styles.input} value={senha} onChangeText={setSenha} placeholder="Digite a senha" secureTextEntry />
            <Button title="Cadastrar" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 16,
        marginTop: 12
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginTop: 4
    }
});

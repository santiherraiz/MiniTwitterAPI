import { router } from "expo-router";
import { useState } from "react";

export const useAuth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const setUsernameValue = (value: string) => {
        setUsername(value);
    }

    const setPasswordValue = (value: string) => {
        setPassword(value);
    }

    const onLoginPress = () => {
        let trimmedUser = username.trim();
        let trimmedPass = password.trim();

        if (!trimmedUser || !trimmedPass) {
            setError('Por favor, rellena usuario y contraseña.');
            return;
        }

        setError('');

        router.replace('/feed');
    }

    return {
        // Props
        username,
        password,
        error,

        // Methods
        setUsernameValue,
        setPasswordValue,
        onLoginPress
    }
}
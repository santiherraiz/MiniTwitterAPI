import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
    const { username, password, error, setUsernameValue, setPasswordValue, onLoginPress } = useAuth();

    return (
        <SafeAreaView className="flex-1 bg-primary">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
            >
                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View className="flex-1 mx-2">
                        <View className="flex-1 justify-center px-1 bg-primary">
                            {/* Título */}
                            <Text className="text-3xl font-chirp-bold mb-2 text-center text-gray-900">
                                Mini Twitter
                            </Text>
                            <Text className="text-base text-white mb-8 text-center font-chirp-regular">
                                Inicia sesión para ver el feed
                            </Text>
                        </View>

                        {/* Formulario */}
                        <View className="flex-1">
                            {/* Usuario / email */}
                            <View>
                                <Text className="mb-1 text-xl font-chirp-medium text-gray-700">
                                    Usuario o email
                                </Text>
                                <TextInput
                                    value={username}
                                    onChangeText={setUsernameValue}
                                    placeholder="tucorreo@ejemplo.com"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    className="border border-gray-300 rounded-xl px-4 py-3 text-base bg-gray-50"
                                    placeholderTextColor="#9CA3AF"
                                />
                            </View>

                            {/* Contraseña */}
                            <View className='my-4'>
                                <Text className="mb-1 text-xl font-chirp-medium text-gray-700">
                                    Contraseña
                                </Text>
                                <TextInput
                                    value={password}
                                    onChangeText={setPasswordValue}
                                    placeholder="••••••••"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    className="border border-gray-300 rounded-xl px-4 py-3 text-base bg-gray-50"
                                    placeholderTextColor="#9CA3AF"
                                />
                            </View>

                            {/* Mensaje de error */}
                            {error ? (
                                <Text className="mt-1 text-lg font-chirp-medium text-red-500">{error}</Text>
                            ) : null}

                            {/* Botón Login */}
                            <Pressable className="mt-4 bg-tertiary rounded-xl p-3" onPress={onLoginPress}>
                                <Text className='text-xl text-white font-chirp-medium text-center'>Entrar</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default LoginScreen
import React from 'react';
import { Image, ImageSourcePropType, View, Text } from 'react-native';

interface Props {
    userAvatar?: string | ImageSourcePropType;
    userName: string;
}

const getInitials = (name: string) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length === 1) {
        return parts[0].charAt(0).toUpperCase();
    }
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
};

const Avatar: React.FC<Props> = ({ userAvatar, userName }) => {
    const source = typeof userAvatar === 'string' ? { uri: userAvatar } : userAvatar;

    if (!source) {
        return (
            <View className="w-10 h-10 rounded-full bg-gray-300 justify-center items-center">
                <Text className="text-white font-bold">{getInitials(userName)}</Text>
            </View>
        );
    }

    return <Image source={source as ImageSourcePropType} className="w-10 h-10 rounded-full" />;
};

export default Avatar;
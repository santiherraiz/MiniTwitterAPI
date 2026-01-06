import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

interface Props {
    userAvatar?: ImageSourcePropType;
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

const Avatar = ({ userAvatar, userName }: Props) => {

    const initials = getInitials(userName);

    if (userAvatar) {
        return (
            <Image
                source={userAvatar}
                className="w-12 h-12 rounded-full bg-gray-300"
                resizeMode="cover"
            />
        );
    }

    return (
        <View className="w-12 h-12 rounded-full bg-gray-300 items-center justify-center">
            <Text className="text-base font-semibold text-gray-700">
                {initials}
            </Text>
        </View>
    )
}

export default Avatar
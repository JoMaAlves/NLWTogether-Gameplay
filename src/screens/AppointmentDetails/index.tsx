import React from 'react'
import { View, Text } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Background } from "../../components/Background";
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
    </Background>
  )
}

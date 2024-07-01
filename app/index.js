import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons} from '../constants'
import { Stack } from 'expo-router'

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen 
        options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension={'60%'} />,
            headerRight: () => <ScreenHeaderBtn iconUrl={icons.search} dimension={'60%'} />,
            headerTitle: ''
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
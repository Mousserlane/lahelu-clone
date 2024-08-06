import { Tabs } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomSheet, ThemedText } from '@/components';
import { BottomSheetNavMenu } from '@/components/navigation/BottomSheetNavMenu';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false)

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
            tabBarShowLabel: false
          }}
        />
        <Tabs.Screen
          name="create-meme"
          listeners={{
            tabPress: (p) => { p.preventDefault(); setIsBottomSheetOpen(true) }
          }
          }
          options={{
            title: 'Create Meme',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'add-circle' : 'add-circle-outline'} color={color} />
            ),
            tabBarShowLabel: false
          }}
        />
      </Tabs>
      {isBottomSheetOpen && (
        <BottomSheet>
          <BottomSheetNavMenu closeSheet={() => setIsBottomSheetOpen(false)} />
        </BottomSheet>
      )}
    </>
  );
}

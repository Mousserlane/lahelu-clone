import type { FC } from 'react'
import { ThemedView } from '../ThemedView'
import type { Icon } from '@expo/vector-icons/build/createIconSet'
import { Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native'
import { ThemedText } from '../ThemedText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import BottomSheetMenu from '@/constants/BottomSheetMenu'
import type { BottomSheetMenu as BottomSheetMenuType } from '@/constants/BottomSheetMenu'
import { useNavigation } from 'expo-router'


interface IBottomSheetProps {
  closeSheet: () => void
}
export const BottomSheetNavMenu: FC<IBottomSheetProps> = ({
  closeSheet
}) => {
  const navigation = useNavigation()

  const navigateToPage = (href: string) => {
    closeSheet();
    navigation.navigate(href)
  }
  const renderMenuItems = (menu: BottomSheetMenuType, key: string) => {
    const IconProvider: Icon<any, any> = menu.iconProvider;
    return (
      <TouchableOpacity style={styles.menuItem} key={key} onPress={() => navigateToPage(menu.href)}>
        <IconProvider name={menu.icon} size={20} />
        <ThemedText style={{ marginLeft: 12 }}>{menu.title}</ThemedText>
      </TouchableOpacity>
    )
  }
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        {BottomSheetMenu.map((menu, index) => (
          renderMenuItems(menu, `${menu.title}-${index}`)
        ))}
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  separator: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: -16,
    marginVertical: 16
  },
  content: {
    paddingBottom: 16
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  }
})
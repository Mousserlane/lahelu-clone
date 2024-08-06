import { ThemedText, ThemedView } from '@/components';
import type { FC } from 'react'
import { StyleSheet, TextInput, View } from 'react-native';

interface IInputGroupProps {
  title: string;
  placeholder?: string;
  onChange: (val: any, fieldName: string) => void;
  value: any,
  name: string,
  onSubmit?: () => void
}

export const InputGroup: FC<IInputGroupProps> = ({
  title,
  placeholder,
  value,
  onChange,
  name,
  onSubmit = () => { }
}) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <ThemedText style={{ marginBottom: 8 }} type="defaultSemiBold">
        {title}
      </ThemedText>
      <ThemedView style={styles.textInput} lightColor='#F1F1F1' darkColor='#333333'>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={(val) => onChange(val, name)}
          returnKeyType='done'
          onSubmitEditing={onSubmit}
        // onKeyPress={(e) => {
        //   console.log('e', e.nativeEvent.key)
        // }}
        />
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F1F1F1",
    padding: 8
  }
})
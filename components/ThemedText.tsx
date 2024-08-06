import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | "small" | "smallBold";
};

export function ThemedText({
  style,
  lightColor = "#525252",
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const typeMap = {
    "default": styles.default,
    "title": styles.title,
    "defaultSemiBold": styles.defaultSemiBold,
    "subtitle": styles.subtitle,
    "link": styles.link,
    "small": styles.small,
    "smallBold": styles.smallBold
  }

  return (
    <Text
      style={[
        { color },
        typeMap[type],
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  small: {
    fontSize: 12
  },
  smallBold: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});

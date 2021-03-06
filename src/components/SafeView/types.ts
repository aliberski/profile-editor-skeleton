import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { SafeAreaViewProps } from 'react-navigation';

export interface IProps extends SafeAreaViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

export interface IStyle {
  container: ViewStyle;
}

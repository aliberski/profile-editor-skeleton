import { ViewStyle } from 'react-native';

export interface IProps {
  visible: boolean;
  initialValues: {
    first_name: string;
    last_name: string;
  };
  onClose: () => void;
  onSubmit: (first_name: string, last_name: string) => void;
}

export interface IStyle {
  inputWrapper: ViewStyle;
}

export interface IInput {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
}

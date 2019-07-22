import React, { memo, useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';

import I18n from 'services/i18n';
import style from './style';
import { IProps, IInput } from './types';

const ProfileEditModal = ({
  visible,
  onClose,
  onSubmit,
  initialValues,
}: IProps) => {
  const [firstName, setFirstName] = useState<string>(initialValues.first_name);
  const [lastName, setLastName] = useState<string>(initialValues.last_name);

  const save = () => {
    onSubmit(firstName, lastName);
    onClose();
  };

  const inputs: IInput[] = [
    {
      label: I18n.t('profile.modal.labelFirst'),
      value: firstName,
      onChangeText: setFirstName,
    },
    {
      label: I18n.t('profile.modal.labelSecond'),
      value: lastName,
      onChangeText: setLastName,
    },
  ];

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onClose}>
        <Dialog.Title>{I18n.t('profile.modal.title')}</Dialog.Title>
        <Dialog.Content>
          {inputs.map((inputProps: IInput) => (
            <View key={inputProps.label} style={style.inputWrapper}>
              <TextInput {...inputProps} />
            </View>
          ))}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={save}>{I18n.t('profile.modal.buttonSave')}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default memo(ProfileEditModal);

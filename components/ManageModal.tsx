import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Touchable,
  Text,
} from 'react-native';

function ManageModal({ manageModal, setManageModal }: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={manageModal}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <Text>HELLO FROM MANAGE</Text>
        <TouchableOpacity
          onPress={() => {
            setManageModal(false);
          }}
        >
          <Text>BACK BUTTON</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E8FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ManageModal;

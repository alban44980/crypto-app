import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Touchable,
  Text,
} from 'react-native';

function AddModal({ addModal, setAddModal }: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={addModal}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <Text>HELLO FROM ADD MODAL</Text>
        <TouchableOpacity
          onPress={() => {
            setAddModal(false);
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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddModal;

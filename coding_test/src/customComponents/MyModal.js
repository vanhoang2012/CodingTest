import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../themes/Colors';
import {responsiveHeight, responsiveWidth} from '../themes/Layouts';

function MyModal({
  visible,
  onClose = () => {},
  children,
  containerStyle = {},
  backdropColor = undefined,
  modalStyle = {},
  safeAreaWrapper = true,
}) {
  //////////////////////////////////////////////////
  //////////////////// Variable ////////////////////
  //////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  //////////////////// useEffect ////////////////////
  ///////////////////////////////////////////////////

  //////////////////////////////////////////////////
  //////////////////// Function ////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  ////////////////////// View //////////////////////
  //////////////////////////////////////////////////
  if (safeAreaWrapper) {
    return (
      <SafeAreaView>
        <Modal
          isVisible={visible}
          coverScreen={true}
          onBackButtonPress={onClose}
          hasBackdrop={true}
          presentationStyle={'overFullScreen'}
          style={{margin: 0}}
          backdropTransitionOutTiming={0}
          onBackdropPress={onClose}
          backdropColor={backdropColor}>
          <View style={[styles.contentContainer, containerStyle]}>
            {children}
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
  return (
    <Modal
      isVisible={visible}
      coverScreen={true}
      onBackButtonPress={onClose}
      hasBackdrop={true}
      presentationStyle={'overFullScreen'}
      style={[{margin: 0}, modalStyle]}
      backdropTransitionOutTiming={0}
      onBackdropPress={onClose}
      backdropColor={backdropColor}>
      <View style={[styles.contentContainer, containerStyle]}>{children}</View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: responsiveWidth(16),
    borderTopRightRadius: responsiveWidth(16),
    paddingTop: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(16),
    paddingBottom: responsiveHeight(44),
    marginTop: 'auto',
  },
});
export default MyModal;

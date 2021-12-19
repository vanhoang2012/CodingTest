import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Images from '../../../assets/images/Images';
import Colors from '../../../themes/Colors';
import globalStyle from '../../../themes/globalStyle';
import {
  responsiveFont,
  responsiveHeight,
  responsiveWidth,
} from '../../../themes/Layouts';

function ChallengeCard({item}) {
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
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        source={{uri: item?.image}}
        style={styles.image}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.deadline}>
            {moment(item?.deadline).diff(moment(), 'day') <= 7
              ? moment(item?.deadline).diff(moment(), 'day') + ' days left'
              : ''}
          </Text>
        </View>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.pointText}>Earn up to</Text>
            <Text style={styles.point}>
              {item?.point} <Text style={styles.pointText}>pts</Text>
            </Text>
          </View>
          <Image source={Images.arrowRight} style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: responsiveWidth(16),
    width: responsiveWidth(132),
    height: responsiveHeight(300),
    backgroundColor: Colors.white,
    ...globalStyle.shadow,
    marginVertical: responsiveHeight(16),
    marginHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(8),
  },
  image: {
    height: responsiveWidth(100),
    width: responsiveWidth(100),
  },
  title: {
    fontSize: responsiveFont(14),
    color: Colors.blackText,
    fontWeight: 'bold',
    marginTop: responsiveHeight(6),
  },
  deadline: {
    fontSize: responsiveFont(12),
    color: Colors.blackText3,
    fontWeight: 'normal',
    marginTop: responsiveHeight(6),
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  pointText: {
    fontSize: responsiveFont(12),
    fontWeight: 'normal',
    color: Colors.blackText3,
  },
  point: {
    fontSize: responsiveFont(14),
    fontWeight: 'bold',
    color: Colors.primary,
  },
  icon: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    tintColor: Colors.red2,
  },
});

export default ChallengeCard;

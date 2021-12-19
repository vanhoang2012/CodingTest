import React, {useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Colors from '../../themes/Colors';
import {squareImage} from '../../themes/globalStyle';
import {
  getStatusBarHeight,
  isIOS,
  responsiveFont,
  responsiveHeight,
  responsiveWidth,
} from '../../themes/Layouts';
import AssessmentCard from './components/AssessmentCard';
import ChallengeCard from './components/ChallengeCard';

const HomeScreen = ({navigation}) => {
  const assessmentData = [
    {
      id: '1',
      title: 'Advanced Health Screening',
      point: 1000,
      image:
        'https://w7.pngwing.com/pngs/64/886/png-transparent-human-hand-and-pink-heart-illustration-health-care-medicine-computer-icons-hospital-icon-love-purple-text-thumbnail.png',
      deadline: '2021/12/24',
    },
    {
      id: '2',
      title: 'Advanced Health Screening',
      point: 1000,
      image:
        'https://w7.pngwing.com/pngs/64/886/png-transparent-human-hand-and-pink-heart-illustration-health-care-medicine-computer-icons-hospital-icon-love-purple-text-thumbnail.png',
      deadline: '2021/12/24',
    },
    {
      id: '3',
      title: 'Advanced Health Screening',
      point: 1000,
      image:
        'https://w7.pngwing.com/pngs/64/886/png-transparent-human-hand-and-pink-heart-illustration-health-care-medicine-computer-icons-hospital-icon-love-purple-text-thumbnail.png',
      deadline: '2021/12/24',
    },
    {
      id: '4',
      title: 'Advanced Health Screening',
      point: 1000,
      image:
        'https://w7.pngwing.com/pngs/64/886/png-transparent-human-hand-and-pink-heart-illustration-health-care-medicine-computer-icons-hospital-icon-love-purple-text-thumbnail.png',
      deadline: '2021/12/24',
    },
  ];
  const challengeData = [
    {
      id: '1',
      title: 'Say no to sugar',
      point: 1000,
      image: 'https://static.thenounproject.com/png/3284400-200.png',
      deadline: '2021/12/24',
    },
    {
      id: '2',
      title: '5km challenge',
      point: 1000,
      image:
        'https://www.iconbunny.com/icons/media/catalog/product/3/4/349.10-running-person-icon-iconbunny.jpg',
      deadline: '2021/12/31',
    },
    {
      id: '3',
      title: '5km challenge',
      point: 1000,
      image:
        'https://www.iconbunny.com/icons/media/catalog/product/3/4/349.10-running-person-icon-iconbunny.jpg',
      deadline: '2021/12/26',
    },
    {
      id: '4',
      title: '5km challenge',
      point: 1000,
      image:
        'https://www.iconbunny.com/icons/media/catalog/product/3/4/349.10-running-person-icon-iconbunny.jpg',
      deadline: '2021/12/28',
    },
  ];

  const renderAssessmentItem = ({item}) => <AssessmentCard item={item} />;
  const renderChallengeItem = ({item}) => <ChallengeCard item={item} />;

  const keyExtractor = (item, index) => `${index}_${item?.id}`;
  const renderSeparator = () => <View style={{width: responsiveWidth(16)}} />;

  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
      <ScrollView>
        <View>
          <Text style={styles.title}>Assessments</Text>
          <FlatList
            data={assessmentData}
            renderItem={renderAssessmentItem}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
            keyExtractor={keyExtractor}
            horizontal={true}
          />
        </View>
        <View>
          <Text style={styles.title}>Challenges</Text>
          <FlatList
            data={challengeData}
            renderItem={renderChallengeItem}
            keyExtractor={keyExtractor}
            horizontal={true}
            ItemSeparatorComponent={renderSeparator}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(16),
    paddingTop: isIOS() ? getStatusBarHeight() : 0,
    backgroundColor: Colors.background,
  },
  homeText: {
    fontSize: responsiveFont(20),
    fontWeight: 'bold',
    marginTop: responsiveHeight(16),
    color: Colors.blackText,
  },
  title: {
    fontSize: responsiveFont(17),
    fontWeight: 'bold',
    marginTop: responsiveHeight(16),
    color: Colors.blackText,
  },
});

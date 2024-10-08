import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.halfBlack}>
        <Svg height={height / 4} width={width / 4} viewBox="0 0 163.549 163.549" style={styles.svgBlack}>
          <Path
            d="M63.544,161.323c93.412,14.144,96.695-43.74,96.695-43.74c3.631-41.441-38.811-53.608-51.627-76.633
	c-12.836-23.012,16.928-26.473,15.115-11.666c-1.799,14.785,6.912,17.432,7.408,18.582c0.488,1.143,13.146,13.816,14.961,11.434
	c1.803-2.396-5.18-11.434-5.18-11.434s5.422-3.135,7.473-10.199c5.922-16.124-23.34-54.924-54.25-28.95
	c-30.266,27.961,10.18,58.23,20.719,73.352c10.525,15.126,10.137,26.54,3.609,28.615c-6.672,2.11-11.881-4.533-14.619-14.81
	C101.3,86.29,84.45,55.433,48.593,65.281C21.958,73.845,25.07,84.362,3.681,78.442C-3.874,150.468,63.544,161.323,63.544,161.323z"
            fill="white"
          />
          {/* <!-- Add more Path elements to complete the swan drawing --> */}
        </Svg>
      </View>
      <View style={styles.halfWhite}>
        <Svg height={height / 4} width={width / 4} viewBox="0 0 163.549 163.549" style={styles.svgWhite}>
          <Path
            d="M63.544,161.323c93.412,14.144,96.695-43.74,96.695-43.74c3.631-41.441-38.811-53.608-51.627-76.633
	c-12.836-23.012,16.928-26.473,15.115-11.666c-1.799,14.785,6.912,17.432,7.408,18.582c0.488,1.143,13.146,13.816,14.961,11.434
	c1.803-2.396-5.18-11.434-5.18-11.434s5.422-3.135,7.473-10.199c5.922-16.124-23.34-54.924-54.25-28.95
	c-30.266,27.961,10.18,58.23,20.719,73.352c10.525,15.126,10.137,26.54,3.609,28.615c-6.672,2.11-11.881-4.533-14.619-14.81
	C101.3,86.29,84.45,55.433,48.593,65.281C21.958,73.845,25.07,84.362,3.681,78.442C-3.874,150.468,63.544,161.323,63.544,161.323z"
            fill="black"
          />
          {/* <!-- Add more Path elements to complete the swan drawing --> */}
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  halfBlack: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfWhite: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgBlack: {
    transform: [{ scaleX: -1 }],
    translateX: -65,
    alignSelf: 'flex-end'
  },
  svgWhite: {
    // Add any specific styles for the white SVG here
    translateX: -65,
    alignSelf: 'flex-start'
  },
});

export default SplashScreen;

import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';
import exampleVideo from './sample.mp4';

const Post = () => {
  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={exampleVideo}
          style={styles.video}
          onError={(e: LoadError) => console.log(e)}
          resizeMode="cover"
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Text style={{fontSize: 20, color: 'white'}}>side</Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>@local-business</Text>
          <Text style={styles.description}>product description</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

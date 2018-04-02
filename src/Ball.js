import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    // NOTE: The following code on Animated is nothing to do with any component at this point. It is attached to an actual component at line 15.
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        // NOTE: You can add/nest as many components as you want.
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
};

export default Ball;

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import PropTypes from 'prop-types'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 25,
      seconds: 0,
      zero: 0, //padding for under 10 seconds
      startTimer: false,
      startPause: 'start',
      timer: 'Work',
    }
    this.base = this.state
  }

  startStop = () => {
    if (this.state.startTimer) {
      clearInterval(this.interval)
      this.setState({
        startTimer: false,
        startPause: 'start',
      })
      return
    }
    this.setState({
      startTimer: true,
      startPause: 'pause',
    })
    this.interval = setInterval(this.incr, 1000)
  }

  reset = () => {
    this.setState(this.base)
    clearInterval(this.interval)
  }

  incr = () => {
    //timer changeover at 0:00
    if (this.state.minutes == 0 && this.state.seconds == 0 ) {
      if (this.state.timer == 'Work') {
        this.setState({
          timer: 'Break',
          minutes: 5,
          seconds: 0,
        })
      } else {
        this.setState({
          timer: 'Work',
          minutes: 25,
          seconds: 0,
        })
      }
    }
    //add padded 0
    if (this.state.seconds < 11) {
      this.setState(prevState => ({
        zero: 0,
      }))
    }
    else {
      this.setState(prevState => ({
      zero: '',
      }))
    }
    //minute change when seconds=0
    if (this.state.seconds == 0) {
      this.setState(prevState => ({
        // zero: 0,
        seconds: prevState.seconds + 59,
        minutes: prevState.minutes - 1,
        zero: '',
      }))
    }
    else {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }))
    }
  }

  buttonText = () => {
    if (this.state.startPause) {
      return 'start'
    } else {
      return 'pause'
    }
  }

  //handles user input for minutes
  onTextChanged(text) {
    this.setState({
      minutes: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.timer} Timer</Text>
        <Text style={styles.timer}>
          {this.state.minutes}:{this.state.zero}{this.state.seconds}
        </Text>
        <View style={styles.row}>
          <Button
            title = {this.state.startPause}
            onPress = {this.startStop.bind(this)}
          />
          <Button
            title = 'reset'
            onPress = {this.reset.bind(this)}
          />
        </View>
        <View style={styles.row}>
          <Text>Set Minutes:    </Text>
          <TextInput
            style = {styles.input}
            keyboardType = 'numeric'
            defaultValue = {this.base.minutes}
            onChangeText = {(text) => this.onTextChanged(text)}
            value = {this.state.minutes}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
  },

  timer: {
    fontSize: 25,
  },

  row: {
    flexDirection: 'row',
    padding: 5,
  },

  input: {
    borderColor: 'blue',
    borderWidth: 1,
  },
});

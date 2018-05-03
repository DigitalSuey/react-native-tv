import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Image
            source={{ uri: this.thumbnailUri(thumbnailUrl, 'large') }}
            style={{ width, height }}
          />
          <Text>{this.props.title}</Text>
          <Button
            backgroundColor="#03A9F4"
            borderRadius={5}
            disabled={!items}
            onPress={() => this.play(0)}
            title="Play"
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component<Props> {
  renderItem({ item }) {
    const { id, title, thumbnailUrl } = item;
    const uri = apiUri(thumbnailUrl && thumbnailUrl.largeThumb);

    return (
      <ListItem
        key={id}
        title={title}
        avatar={{ uri }}
        onPress={() => this.props.navigation.navigate('WorkoutDetail', { id })}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
      <List>
        <FlatList data={data.videos} renderItem={item => this.renderItem(item)}/>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const imageUrl = name => `/assets/${name}`;

const data = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: {
    hero: imageUrl('hero.jpg'),
    logo: imageUrl('logo.png')
  },
  subtitle: 'Subtitle',
  title: 'Homepage',
  videos: [
    {
      title: 'title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: imageUrl('thumbnail-1.jpg'),
      video_url: 'https://f1.media.brightcove.com/12/966586673001/966586673001_2643545821001_1-JFDI-Bootcamp.mp4'
    },
    {
      title: 'title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: imageUrl('thumbnail-2.jpg'),
      video_url: 'https://f1.media.brightcove.com/12/966586673001/966586673001_2643545821001_1-JFDI-Bootcamp.mp4'
    },
    {
      title: 'title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: imageUrl('thumbnail-3.jpg'),
      video_url: 'https://f1.media.brightcove.com/12/966586673001/966586673001_2643545821001_1-JFDI-Bootcamp.mp4'
    },
    {
      title: 'title 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: imageUrl('thumbnail-4.jpg'),
      video_url: 'https://f1.media.brightcove.com/12/966586673001/966586673001_2643545821001_1-JFDI-Bootcamp.mp4'
    },
    {
      title: 'title 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: imageUrl('thumbnail-5.jpg'),
      video_url: 'https://f1.media.brightcove.com/12/966586673001/966586673001_2643545821001_1-JFDI-Bootcamp.mp4'
    }
  ]
};

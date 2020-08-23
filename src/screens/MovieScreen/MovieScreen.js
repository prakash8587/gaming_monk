import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './MovieScreenStyle';
import ListHeader from '../../components/ListHeader/ListHeader';
import MovieCard from '../../components/MovieCard/MovieCard';
import { connect } from 'react-redux';
import { fetchMovieList, fetchMovieListLoader } from "../../redux/action/action";

let page = 1;

class MovieScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        likedArr: [],
        dislikedArr: []
    };
  }

  componentDidMount() {
      page = 1;
      this.props.fetchMovieList(page)
  }

  likeItem = id => {
    const { likedArr, dislikedArr } = {...this.state};
    const _likedArr = likedArr.filter(it => it !== id)
    const _dislikedArr = dislikedArr.filter(it => it !== id)
    _likedArr.push(id);
    this.setState({likedArr: _likedArr, dislikedArr: _dislikedArr})
  }

  dislikeItem = id => {
    const { likedArr, dislikedArr } = {...this.state};
    const _likedArr = likedArr.filter(it => it !== id)
    const _dislikedArr = dislikedArr.filter(it => it !== id)
    _dislikedArr.push(id);
    this.setState({likedArr: _likedArr, dislikedArr: _dislikedArr})
  }

  loadMore = () => {
    this.props.fetchMovieListLoader()
    this.props.fetchMovieList(page++)
  }

  renderFooter = () => (
    <>
    <TouchableOpacity onPress={this.loadMore} style={styles.bottomView}>
      <Text style={styles.loadMoreText}>{this.props.isLoading ? 'Loading' : 'Load More'}</Text>
    </TouchableOpacity>
    <View style={styles.footer}/>
    </>
  )

  navigateToMovieDetails = item => {
    const {likedArr, dislikedArr} = this.state;
    const {navigation} = this.props;
    navigation.navigate('MovieDetailScreen', {item, likedArr, dislikedArr});
  }

  render() {
    const { movieArr = [], cartArr = [] } = this.props;
    const { likedArr, dislikedArr } = this.state;
    return (
      <SafeAreaView style={styles.MainContainer}>
        <ListHeader/>
        <FlatList
          data={movieArr}
          style={styles.listPadding}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            const arr = cartArr.filter(
              (it) => it.name === item.name,
            );
            return (
              <MovieCard
                onPress={() => this.navigateToMovieDetails(item)}
                item={item}
                likedArr={likedArr}
                dislikedArr={dislikedArr}
                likeItem={this.likeItem}
                dislikeItem={this.dislikeItem}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          ListFooterComponent={this.renderFooter}
        />
      </SafeAreaView>
    );
  }
}

const mapStateFromProps = state => {
console.log("state", state)
  return {
    movieArr: state.movieArr,
    cartArr: state.cartArr,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = {
  fetchMovieList,
  fetchMovieListLoader
}

export default connect(mapStateFromProps, mapDispatchToProps)(MovieScreen);

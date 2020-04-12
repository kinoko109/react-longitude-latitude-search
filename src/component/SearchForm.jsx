import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '東京タワー',
    }
  }

  /**
   * @desc 入力された文字列をstateにセット
   * @param {String} place - inputに入力される文字列
   */
  handlePlace(place) {
    this.setState({ place });
  }

  /**
   * @desc submit時の制御
   * @param {event object} event - イベントオブジェクト
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.place);
  }

  render() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input 
          type="text"
          value={this.state.place}
          className="search-input"
          onChange={event => this.handlePlace(event.target.value)}
        />
        <input 
          type="submit"
          value="検索"
          className="search-submit"
        />
      </form>
    );
  }
}

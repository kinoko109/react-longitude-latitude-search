import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import SearchForm from './SearchForm'
import GeocodeResult from './GeocodeResult'

const GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const API_KEY = 'AIzaSyDhWL-OMpUa8iyX_DgoEN3K0L5JvnfIE1Q';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      address: '',
      lat: '0',
      lng: '0',
    };
  }

  /**
   * @desc エラー用の結果表示
   * @param {String} errorMessage - エラーメッセージ
   */
  showErrorMessage(errorMessage) {
    this.setState({
      address: errorMessage,
      lat: '0',
      lng: '0',
    });
  }

  handlePlaceSubmit(place) {
    axios.get(GEOCODE_URL, { params: { address: place, key: API_KEY } })
      // 成功時
      .then(response => {
        console.log(response)
        const data = response.data
        const resultData = data.results[0];
        switch (data.status) {
          case 'OK' : {
            const location = resultData.geometry.location;
            this.setState({
              address: resultData.formatted_address,
              lat: location.lat,
              lng: location.lng,
            });
            break;
          }
          case 'ZERO_RESULTS': {
            this.showErrorMessage('結果がありません。');
            break;
          }
          default: {
            this.showErrorMessage('エラーが発生しました。');
          }
        }
      })
      .catch(() => {
        this.showErrorMessage('通信エラー...');
      });
  }

  render() {
    return(
      <Wrapper>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult 
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
`

export default App;

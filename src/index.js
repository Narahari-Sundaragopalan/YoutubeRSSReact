import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAvdblF6vgn65_4MrRb-2MHuD0XeEKad3E'

// Create a new component with ES6 syntax
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            //Set the State (Will cause component to Re-render)
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            });
        });

    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// take the components' and put it on the page (in the DOM) with a reference to page element
ReactDOM.render(<App />, document.querySelector('.container'));
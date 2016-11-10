/* eslint-disable */
import React, { Component } from 'react';
import Navigation from '../components/navigation';
import langs from '../langs.json';
import docs from '../docs.json';
import './root.less';

console.log(docs);

class Root extends Component {

  constructor(props){
    super(props)
    this.state = {
      langs: langs['en']
    }
  }

  render() {
    const { params, children } = this.props;
    return (
      <div className="App">
        <Navigation
          data={docs}
          logo="https://avatars3.githubusercontent.com/u/10220215?v=3&s=460"
          current={params}
          langs={this.state.langs.navigation}
        />
        <div className="App__content">
        {children && React.cloneElement(children, {
          langs: this.state.langs.content,
          docs
        })}
        </div>
      </div>
    );
  }
}


export default Root;
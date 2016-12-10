/* eslint-disable */
import React, { Component } from 'react';
import Navigation from '../components/navigation';
import langs from '../langs.json';
import docs from '../docs.json';
import './root.less';

class Root extends Component {

  constructor(props){
    super(props)

    let locale = 'en-US'

    if (typeof(Storage) !== "undefined") {
       locale = localStorage.getItem("reactweuidoc-lang") ? localStorage.getItem("reactweuidoc-lang") : locale
    }

    this.state = { locale }
  }

  render() {
    const { params, children } = this.props;

    let changeLang = (lang) => {
      if (typeof(Storage) !== "undefined") {
         localStorage.setItem("reactweuidoc-lang", lang);
      }
      this.setState({ locale: lang })
    }
    return (
      <div className="App">
        <Navigation
          data={docs}
          logo="https://avatars3.githubusercontent.com/u/10220215?v=3&s=460"
          current={params}
          langs={langs[this.state.locale].navigation}
          langsOptions={ Object.keys(langs) }
          locale={this.state.locale}
          changeLang={changeLang.bind(this)}
        />
        <div className="App__content">
        {children && React.cloneElement(children, {
          langs: langs[this.state.locale].content,
          locale: this.state.locale,
          docs
        })}
        </div>
      </div>
    );
  }
}


export default Root;
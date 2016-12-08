/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SplitPane from 'react-split-pane';
import Preview from "../components/preview";
import NoPreview from './nopreview';
import generateMarkdown from './generateMarkdown';
const reactDocs = require('react-docgen');

import WeUI from '../../lib';
import '../../lib/react-weui.min.css';

import iconSrc from '../logo.svg';
import Demos from '../../example';
import './home.less';

class Docs extends Component {
  constructor(props){
    super(props);

  }

  render(){
    let article = this.props.docs[this.props.params.id].items[this.props.params.aid]
    let Sample = () => false;
    let code = '';
    if(article.preview && article.component){
      Sample = Demos[article.preview]

      if(article.code){
        code = require(`!!raw!../../example/pages/${article.code}`)
      }else{
        code = require(`!!raw!../../example/pages/${article.preview.toLowerCase()}/index`)
      }

    }
    let src = article.component ? require(`!!raw!../../src/components/${article.component}`) : false
    let content = src ? generateMarkdown(article.name, article.version, reactDocs.parse(src)) : false

    return (
      <SplitPane split="vertical" minSize={20} defaultSize="60%" primary="second">
          <div className="App__preview background--canvas flex-center">
          {
            !!article ?
            <div className="App__mobileview">
                <Sample />
            </div> : false
          }
          </div>
          <div className="App__detail">
            {this.props.children && React.cloneElement(this.props.children, {
              docs: this.props.docs,
              aid: this.props.params.aid,
              langs: this.props.langs.article,
              guide: article.guide ? require(`!!raw!../guide/${article.guide}`) : false,
              content,
              code
            })}
          </div>
      </SplitPane>

    );
  }
}


export default Docs;
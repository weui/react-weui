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

  renderWithMenu(){
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
    let content = src ? generateMarkdown(article.name, article.version, reactDocs.parse(src), this.props.langs.article) : false

    if(!article.preview){
      return (
        <div className="App__detail">
          {this.props.children && React.cloneElement(this.props.children, {
            docs: this.props.docs,
            aid: this.props.params.aid,
            langs: this.props.langs.article,
            guide: article.guide ? require(`!!raw!../guide/${ typeof article.guide == 'object' ? article.guide[this.props.locale] : article.guide }`) : false,
            content,
            name: !article.preview ? typeof article.name == 'object' ? article.name[this.props.locale] : article.name : false,
            code
          })}
        </div>
      )
    }

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
              guide: article.guide ? require(`!!raw!../guide/${ typeof article.guide == 'object' ? article.guide[this.props.locale] : article.guide }`) : false,
              content,
              code
            })}
          </div>
      </SplitPane>

    );
  }

  render(){
     let item = this.props.docs[this.props.params.id];
     if(item.type == 'menu'){
       return this.renderWithMenu()
     }else if(item.type == 'page') {
       let Page = require(`./${item.link}`)
       return <Page
                langs={this.props.langs}
                locale={this.props.locale}
              />
     }else{
       return <h3>Error</h3>
     }

  }
}


export default Docs;

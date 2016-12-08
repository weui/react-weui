import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'react-remarkable';
import { Article, Toast, Tab, NavBarItem } from '../../src';
import CodeMirror from 'codemirror/lib/codemirror.js';
import hljs from 'highlight.js'

//bunch of css
import 'highlight.js/styles/github.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/addon/display/autorefresh';
import 'github-markdown-css';
import './home.less';

class Articles extends Component {
    static defaultProps = {
        langs: {
            detail: 'Detail',
            srcCode: 'Sample Code',
            loading: 'Loading...'
        }
    };

    componentDidMount(){

        if(this.props.code){
            let el = ReactDOM.findDOMNode(this.refs.codeblock);

            this.editor = CodeMirror.fromTextArea(el, {
                mode: 'jsx',
                lineNumbers: false,
                lineWrapping: true,
                smartIndent: false, // javascript mode does bad things with jsx indents
                matchBrackets: true,
                readOnly: true,
                autoRefresh: true,
                theme: 'monokai'
            });
        }

    }

    componentDidUpdate(){


        if(this.props.guide){
            let $guide = ReactDOM.findDOMNode(this.refs.guide);
            let $codes = $guide.querySelectorAll('pre code')

            Array.from($codes).forEach( $code => {
                 hljs.highlightBlock($code);
            })

        }


        if(!this.editor){
            let el = ReactDOM.findDOMNode(this.refs.codeblock);

            this.editor = CodeMirror.fromTextArea(el, {
                mode: 'jsx',
                lineNumbers: false,
                lineWrapping: true,
                smartIndent: false, // javascript mode does bad things with jsx indents
                matchBrackets: true,
                readOnly: true,
                autoRefresh: true,
                theme: 'monokai'
            });
        }

        if(this.props.code) this.editor.setValue(this.props.code)


    }

    render(){
        const { code, langs, guide, content } = this.props;

        return (
          <Tab type="navbar">
                <NavBarItem label={langs.detail} >
                    <Article>
                        <div className="markdown-body">
                            <Remarkable source={content} />
                            {
                                guide ? <Remarkable ref="guide" source={guide} /> : false
                            }
                        </div>
                    </Article>
                </NavBarItem>
                { code ?
                <NavBarItem label={langs.srcCode} >
                    <Article>
                        <textarea ref="codeblock" defaultValue={code.replace('../../../src/index','react-weui')}/>
                    </Article>
                </NavBarItem> : false}
          </Tab>
        );
    }
}

export default Articles;

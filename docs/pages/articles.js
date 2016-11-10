import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'react-remarkable';
import { Article, Toast, Tab, NavBarItem } from '../../src';
import generateMarkdown from './generateMarkdown';
import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/addon/display/autorefresh';
import 'github-markdown-css';
import './home.less';

const reactDocs = require('react-docgen');

class Articles extends Component {
    static defaultProps = {
        langs: {
            detail: 'Detail',
            srcCode: 'Sample Code',
            loading: 'Loading...'
        }
    };

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            content: null
        }
    }

    componentDidMount(){
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
        this.componentWillReceiveProps(this.props)
    }

    componentDidUpdate(){
        this.editor.setValue(this.props.code)
    }

    componentWillReceiveProps(nextProps){
        this.setState({loading: true, content: null});
        let article = this.props.docs[nextProps.params.id].items[nextProps.params.aid]

        let src = require(`!!raw!../../src/components/${article.component}`)
        let content = generateMarkdown(article.name, article.version, reactDocs.parse(src));
        //article.doc
        this.setState({loading: false, content});
    }

    render(){
        const { code, langs } = this.props;
        return (
          <Tab type="navbar">
                <NavBarItem label={langs.detail}>
                    <Article>
                    {
                        this.state.loading ?
                        <Toast icon="loading" show={true}>{langs.loading}.</Toast> :
                        <div className="markdown-body">
                            <Remarkable source={this.state.content} />
                        </div>
                    }
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
//<SyntaxHighlighter language='javascript' style={SyntaxStyle}>{code.replace('../../../src/index','react-weui')}</SyntaxHighlighter>
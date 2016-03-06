/**
 * Created by n7best.
 */



import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from '../icon';

class SearchBar extends React.Component {
    static propTypes = {
        placeholder: React.PropTypes.string,
        onChange: React.PropTypes.func,
        onClear: React.PropTypes.func,
        onCancel: React.PropTypes.func,
        lang: React.PropTypes.object
    };

    static defaultProps = {
        placeholder: '搜索',
        onChange: undefined,
        onClear: undefined,
        onCancel: undefined,
        lang: {
            cancel: '取消'
        }
    };

    state={
        focus: false,
        text: ''
    }

    changeHandle(e) {
        let text = e.target.value;
        this.setState({text});
        if(this.props.onChange) this.props.onChange(text,e);
    }

    cancelHandle(e) {
        this.setState({focus:false});
        if(this.props.onCancel) this.props.onCancel(e);
    }

    clearHandle(e) {
        this.setState({text: ''});
        if(this.props.onClear) this.props.onClear(e);
        if(this.props.onChange) this.props.onChange('',e);
    }

    render() {
        const {children, placeholder, className, ...others} = this.props;
        const clz = classNames({
            'weui_search_bar': true,
            'weui_search_focusing': this.state.focus
        }, className);

        return (
            <div className={clz}>
                <form className='weui_search_outer'>
                    <div className='weui_search_inner'>
                        <Icon value='search'/>
                        <input
                            ref='searchInput'
                            type='search'
                            className='weui_search_input'
                            placeholder={placeholder}
                            onFocus={e=>this.setState({focus:true})}
                            onBlur={e=>this.setState({focus:false})}
                            onChange={this.changeHandle.bind(this)}
                            value={this.state.text}
                        />
                        <a className='weui_icon_clear' onMouseDown={this.clearHandle.bind(this)}/>
                    </div>
                    <label
                        className='weui_search_text'
                        onClick={e=>ReactDOM.findDOMNode(this.refs.searchInput).focus()}
                        style={{display: this.state.text ? 'none': null}}
                    >
                        <Icon value='search'/>
                        <span>{placeholder}</span>
                    </label>
                </form>
                <a className='weui_search_cancel' onClick={this.cancelHandle.bind(this)}>{this.props.lang.cancel}</a>
            </div>
        );
    }
}

export default SearchBar;
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
        searchName: React.PropTypes.string,
        onChange: React.PropTypes.func,
        onClear: React.PropTypes.func,
        onCancel: React.PropTypes.func,
        onSubmit: React.PropTypes.func,
        lang: React.PropTypes.object
    };

    static defaultProps = {
        placeholder: '搜索',
        searchName: 'q',
        onChange: undefined,
        onClear: undefined,
        onCancel: undefined,
        onSubmit: undefined,
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

    submitHandle(e) {
        if (this.props.onSubmit) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onSubmit(this.state.text, e);
        }
    }

    render() {
        const {children, placeholder, className, searchName, ...others} = this.props;
        const clz = classNames({
            'weui_search_bar': true,
            'weui_search_focusing': this.state.focus
        }, className);

        return (
            <div className={clz}>
                <form className='weui_search_outer' onSubmit={this.submitHandle.bind(this)}>
                    <div className='weui_search_inner'>
                        <Icon value='search'/>
                        <input
                            ref='searchInput'
                            type='search'
                            name={searchName}
                            className='weui_search_input'
                            placeholder={placeholder}
                            onFocus={e=>this.setState({focus:true})}
                            onBlur={e=>this.setState({focus:false})}
                            onChange={this.changeHandle.bind(this)}
                            value={this.state.text}
                        />
                        {/*React will not trigger onMouseDown when not onClick presented*/}
                        <a
                            className='weui_icon_clear'
                            onClick={e=>e/*issues #59*/}
                            onMouseDown={this.clearHandle.bind(this)}
                        />
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
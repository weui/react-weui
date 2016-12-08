import React from 'react';
import { mount, shallow } from 'enzyme';
import assert from 'assert';
import sinon from 'sinon';
import WeUI from '../src/index';
var jsdom = require('jsdom');

const { SearchBar } = WeUI;

describe('<SearchBar></SearchBar>', ()=>{
    before(() => {
        global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
        global.window = document.defaultView;
    });

    it('should have related weui style', ()=>{
        const wrapper = shallow(<SearchBar />)

        assert(wrapper.hasClass('weui-search-bar'))
        assert(wrapper.find('form').hasClass('weui-search-bar__form'))
        assert(wrapper.find('form').find('div').hasClass('weui-search-bar__box'))
        assert(wrapper.find('input').hasClass('weui-search-bar__input'))
        assert(wrapper.find('form').find('div').find('a').hasClass('weui-icon-clear'))
        assert(wrapper.find('label').hasClass('weui-search-bar__label'))
        assert(wrapper.find('a').last().hasClass('weui-search-bar__cancel-btn'))
    })

    it('should trigger focus on focus', ()=>{
        const wrapper = mount(<SearchBar />)

        assert(wrapper.find('.weui-search-bar_focusing').length == 0)
        wrapper.find('input').simulate('focus')
        assert(wrapper.find('.weui-search-bar_focusing').length > 0)
    })

    it('should trigger onChange on input', ()=>{
        let value = ''
        const cb = text => value = text;
        const wrapper = mount( <SearchBar onChange={cb} />)

        wrapper.find('input').simulate('focus')
        wrapper.find('input').simulate('change', { target: { value: 'Changed' } })

        assert( value == 'Changed')
    })

    it('should change focus state onBlur depends on text', ()=> {
        let value = ''
        const cb = text => value = text;
        const wrapper = mount( <SearchBar onChange={cb} />)

        wrapper.find('input').simulate('focus')
        wrapper.find('input').simulate('change', { target: { value: 'Changed' } })
        wrapper.find('input').simulate('blur')

        assert(wrapper.find('.weui-search-bar_focusing').length > 0)

        wrapper.find('input').simulate('focus')
        wrapper.find('input').simulate('change', { target: { value: '' } })
        wrapper.find('input').simulate('blur')

        assert(wrapper.find('.weui-search-bar_focusing').length == 0)
    })

    it('should clear text and onClear, on clear', ()=> {
        let value = ''
        const cbClear = sinon.spy()
        const cb = text => value = text;
        const wrapper = mount( <SearchBar onChange={cb} onClear={cbClear} />)

        wrapper.find('input').simulate('focus')
        wrapper.find('input').simulate('change', { target: { value: 'Changed' } })

        assert( value == 'Changed')

        wrapper.find('.weui-icon-clear').simulate('click')
        assert( value == '' )
        assert( cbClear.called )
    })

    it('should clear text and focus and onCancel, on cancel', ()=> {
        let value = ''
        const cbCancel = sinon.spy()
        const cb = text => value = text;
        const wrapper = mount( <SearchBar onChange={cb} onCancel={cbCancel} />)

        wrapper.find('input').simulate('focus')
        wrapper.find('input').simulate('change', { target: { value: 'Changed' } })

        assert( value == 'Changed')

        wrapper.find('.weui-search-bar__cancel-btn').simulate('click')
        assert( value == '' )
        assert( wrapper.find('.weui-search-bar_focusing').length == 0 )
        assert(cbCancel.called)
    })

    it('should trigger onSubmit', ()=> {
        const cb = sinon.spy();
        const wrapper = mount( <SearchBar onSubmit={cb} />)

        wrapper.find('input').simulate('focus')
        wrapper.find('input').simulate('change', { target: { value: 'Changed' } })
        wrapper.find('form').simulate('submit')

        assert( cb.called )
    })

})
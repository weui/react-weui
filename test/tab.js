import React from 'react';
import { mount, shallow } from 'enzyme';
import assert from 'assert';
import sinon from 'sinon';
import WeUI from '../src/index';

const { Tab, TabBody, TabBodyItem, NavBar, NavBarItem, TabBar, TabBarItem, TabBarLabel, TabBarIcon } = WeUI;

describe('<Tab></Tab>', ()=>{

    describe('Components should render all related weui class', ()=> {
        it('TabBody render weui-tab__panel', ()=> {
            assert( shallow(<TabBody/>).hasClass('weui-tab__panel') )
        })

        it('TabBodyItem render weui-tab__bd-item', ()=> {
            assert( shallow(<TabBodyItem/>).hasClass('weui-tab__bd-item') )
        })

        it('NavBar render weui-navbar', ()=> {
            assert( shallow(<NavBar/>).hasClass('weui-navbar') )
        })

        it('NavBarItem render weui-navbar__item', ()=> {
            assert( shallow(<NavBarItem/>).hasClass('weui-navbar__item') )
            assert( shallow(<NavBarItem active/>).hasClass('weui-bar__item_on') )
        })

        it('TabBar render weui-tabbar', ()=> {
            assert( shallow(<TabBar/>).hasClass('weui-tabbar') )
        })

        it('TabBarItem render weui-tabbar__item', ()=> {
            assert( shallow(<TabBarItem/>).hasClass('weui-tabbar__item') )
            assert( shallow(<TabBarItem active/>).hasClass('weui-bar__item_on') )
        })

        it('TabBarLabel render weui-tabbar__label', ()=> {
            assert( shallow(<TabBarLabel/>).hasClass('weui-tabbar__label') )
        })

        it('TabBarIcon render weui-tabbar__icon', ()=> {
            assert( shallow(<TabBarIcon/>).hasClass('weui-tabbar__icon') )
        })
    })

    it('should render Tab Component', ()=>{

        const wrapper = mount(
            <Tab />
        )

        assert(wrapper.instance() instanceof Tab)
        assert(wrapper.find('.weui-tab').length > 0)
    })

    it('should auto mapping NavBar', ()=>{
        const wrapper = mount(
            <Tab type="navbar">
                <NavBarItem label="Nav1">test</NavBarItem>
                <NavBarItem label="Nav2">test2</NavBarItem>
            </Tab>
        )

        assert(wrapper.find(NavBar).length > 0)
        assert(wrapper.find(NavBar).find(NavBarItem).length == 2)
        assert(wrapper.find(TabBody).length == 1)
        assert(wrapper.find(TabBody).find(TabBodyItem).length == 2)
        assert(wrapper.find(TabBody).find(TabBodyItem).first().text() == 'test')
        assert(wrapper.find(TabBody).find(TabBodyItem).last().text() == 'test2')
        assert(wrapper.find(TabBody).find(TabBodyItem).first().prop('active') == true)
    })

    it('should auto mapping TabBar', ()=>{

        const wrapper = mount(
            <Tab type="tabbar">
                <TabBarItem label="Tab1" icon="pic">test</TabBarItem>
                <TabBarItem label="Tab2" icon="pic">test2</TabBarItem>
            </Tab>
        )

        assert(wrapper.find(TabBar).length > 0)
        assert(wrapper.find(TabBar).find(TabBarItem).length == 2)
        assert(wrapper.find(TabBody).length == 1)
        assert(wrapper.find(TabBody).find(TabBodyItem).length == 2)
        assert(wrapper.find(TabBody).find(TabBodyItem).first().text() == 'test')
        assert(wrapper.find(TabBody).find(TabBodyItem).last().text() == 'test2')
        assert(wrapper.find(TabBody).find(TabBodyItem).first().prop('active') == true)
    })

    it('should switch tab onClick and trigger onChange', ()=> {
        let spy = sinon.spy()
        const wrapper = mount(
            <Tab type="tabbar" onChange={spy}>
                <TabBarItem label="Tab1">test</TabBarItem>
                <TabBarItem label="Tab2">test2</TabBarItem>
            </Tab>
        )

        assert(wrapper.find(TabBody).find(TabBodyItem).first().prop('active') == true)

        wrapper.find(TabBar).find(TabBarItem).last().simulate('click')

        assert(wrapper.find(TabBody).find(TabBodyItem).first().prop('active') == false)
        assert(wrapper.find(TabBody).find(TabBodyItem).last().prop('active') == true)

        assert(spy.called)
    })

    it('should return nothing with invalid type', ()=>{
        const wrapper = mount(<Tab type="haha" />)
        assert(wrapper.html() == null)
    })

})
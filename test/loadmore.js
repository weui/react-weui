import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const { LoadMore, Icon } = WeUI;

[true, false, null].map( loading => {
    [true, false, null].map( showLine => {
        [true, false, null].map ( showDot=> {
            describe(`<LoadMore loading=${loading} showLine=${showLine} showDot=${showDot}></LoadMore>`, ()=>{
                const content = 'test'
                const wrapper = shallow(
                     <LoadMore loading={loading} showLine={showLine} showDot={showDot}>{content}</LoadMore>
                );

                it(`should have 'weui-loadmore' class name`, ()=>{
                    assert(wrapper.hasClass(`weui-loadmore`))
                });

                if(showLine){
                    it(`should have 'weui-loadmore_line' class name`, ()=>{
                        assert(wrapper.hasClass(`weui-loadmore_line`))
                    });
                }

                if(showDot){
                    it(`should have 'weui-loadmore_dot' class name`, ()=>{
                        assert(wrapper.hasClass(`weui-loadmore_dot`))
                    });
                }

                if(loading){
                    let $loading = wrapper.find(Icon);
                    assert($loading.prop('value') === 'loading')
                }

                it(`should have 'weui-loadmore__tips' class`, ()=>{
                    assert(wrapper.find('.weui-loadmore__tips').length > 0);
                });

                it(`shoud render child`, ()=>{
                    assert(wrapper.find('.weui-loadmore__tips').text() === content);
                });
            });

        })
    })
})

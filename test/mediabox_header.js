import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {MediaBoxHeader} = WeUI;

describe('<MediaBoxHeader></MediaBoxHeader>', ()=> {
    [undefined, null, '', 'custom_class'].map((clazz)=>{
        ['MediaBox header wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <p>MediaBox header wording</p>].map((child)=>{
            describe(`<MediaBoxHeader className=${clazz}>${child}</MediaBoxHeader>`, ()=>{
                const wrapper = shallow(
                    <MediaBoxHeader className={clazz}>{child}</MediaBoxHeader>
                );

                it(`should render <MediaBoxHeader></MediaBoxHeader> component `, ()=>{
                    assert(wrapper.instance() instanceof MediaBoxHeader);
                });

                it(`should have 'weui-media-box__hd' class name`, ()=>{
                    assert(wrapper.hasClass(`weui-media-box__hd`));
                });

                it(`should have custom class name ${clazz}`, ()=>{
                    if (clazz) {
                        assert(wrapper.hasClass(`${clazz}`));
                    }
                });

                it(`should have child ${child}`, ()=>{
                    if(wrapper.children().first().type() !== 'img'){
                        assert(wrapper.contains(child));
                    }
                });

                it(`should render img child without classname with weui-media-box__thumb class`, ()=>{
                    if(wrapper.children().first().type() == 'img'){
                        assert(wrapper.children().first().hasClass(`weui-media-box__thumb`));
                    }
                });
            });
        });
    });
});
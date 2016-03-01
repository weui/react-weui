/**
 * Created by n7best
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {MediaBox} = WeUI;

describe('<MediaBox></MediaBox>', () => {
    [true, false].map(isHyperLink => {
        ['appmsg', 'text', 'small_appmsg'].map((type)=> {
            [undefined, null, '', 'custom_class'].map((clazz)=>{
                describe(`<MediaBox type="${type}" href="${isHyperLink}" className="${clazz}"></MediaBox>`, ()=> {
                    const label = 'ok';
                    const href = 'https://weixin.qq.com';
                    let wrapper;
                    if (isHyperLink) {
                        wrapper = shallow(
                            <MediaBox type={type} href={href} className={clazz}>{label}</MediaBox>
                        );
                    }
                    else {
                        wrapper = shallow(
                            <MediaBox type={type} className={clazz}>{label}</MediaBox>
                        );
                    }

                    it('should render <MediaBox></MediaBox> component', () => {
                        assert(wrapper.instance() instanceof MediaBox);
                    });

                    it('should render be a MediaBox without `href` attribute', ()=> {
                        if (!isHyperLink) {
                            assert(wrapper.type() === 'div');
                        }
                    });

                    it('should render be a `a` with `href` attribute', ()=> {
                        if (isHyperLink) {
                            assert(wrapper.type() === 'a');
                            assert(wrapper.prop('href') === href);
                        }
                    });

                    it(`should have class with "weui_media_box" & weui_media_${type}`, ()=> {
                        assert(wrapper.hasClass('weui_media_box'));
                        assert(wrapper.hasClass(`weui_media_${type}`));
                    });

                    it(`should have custom class name ${clazz}`, ()=>{
                        if (clazz) {
                            assert(wrapper.hasClass(`${clazz}`));
                        }
                    });

                    it(`should have text ${label}`, ()=> {
                        assert(wrapper.text() === label);
                    });
                });
            });
        });
    });
});
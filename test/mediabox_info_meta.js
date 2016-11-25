import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {MediaBoxInfoMeta} = WeUI;

describe('<MediaBoxInfoMeta></MediaBoxInfoMeta>', ()=> {
    [true, false].map(extra=>{
        [undefined, null, '', 'custom_class'].map((clazz)=>{
            ['MediaBox InfoMeta wording', <img src="http://mmrb.github.io/avatar/jf.jpg" />, <p>MediaBox InfoMeta wording</p>].map((child)=>{
                describe(`<MediaBoxInfoMeta className=${clazz} extra=${extra}>${child}</MediaBoxInfoMeta>`, ()=>{
                    const wrapper = shallow(
                        <MediaBoxInfoMeta className={clazz} extra={extra}>{child}</MediaBoxInfoMeta>
                    );

                    it(`should have 'weui-media-box__info__meta' class name`, ()=>{
                        assert(wrapper.hasClass(`weui-media-box__info__meta`));
                    });

                    it(`should have 'weui-media-box__info__meta_extra' class name if extra is true`, ()=>{
                        if(extra) assert(wrapper.hasClass(`weui-media-box__info__meta_extra`));
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
                });
            });
        });
    });
});
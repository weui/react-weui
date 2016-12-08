import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';
import sinon from 'sinon';

const { Gallery, GalleryDelete, Icon} = WeUI;
const imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='

describe(`<Gallery></Gallery>`, ()=> {
    [true, false].map(show=>{
        describe(`<Gallery show=${show}></Gallery>`, ()=> {
            const customClassName = 'customClassName1 customClassName2';
            let cb = sinon.spy();
            const wrapper = shallow(
                <Gallery src={imgSrc} show={show} className={customClassName}>
                    <GalleryDelete onClick={ cb } />
                </Gallery>
            );

            it(`should have 'weui-gallery' class name`, ()=>{
                assert(wrapper.hasClass(`weui-gallery`));
            });

            it(`should have span with 'weui-gallery__img' class name`, ()=>{
                assert(wrapper.find('span').hasClass(`weui-gallery__img`));
            });

            it(`should have span with image`, ()=>{
                assert(wrapper.find('span').prop(`style`).backgroundImage == `url(${imgSrc})`);
            });

            it(`should have div with 'weui-gallery__opr' class name`, ()=>{
                assert(wrapper.find('.weui-gallery__opr').length > 0);
            });

            it(`should have GalleryDelete`, ()=>{
                assert(wrapper.find('div').find(GalleryDelete).length > 0);
            });

            it(`GalleryDelete should have Icon`, ()=>{
                const $gd = wrapper.find('div').find(GalleryDelete).shallow()
                assert($gd.find(Icon).prop('value') == 'delete');
                assert($gd.find(Icon).prop('className') == 'weui-icon_gallery-delete');
            });

            it(`should have custom class name ${customClassName}`, ()=> {
                assert(wrapper.hasClass(customClassName));
            });

        });
    })
});

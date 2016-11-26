import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const { Preview, PreviewHeader, PreviewItem, PreviewBody, PreviewFooter, PreviewButton } = WeUI;

describe('<Preview></Preview>', ()=> {

    describe(`<Preview></Preview>`, ()=>{
        const wrapper = shallow(
            <Preview>
                <PreviewHeader>
                    <PreviewItem label="Total" value="$49.99" />
                </PreviewHeader>
                <PreviewBody>
                    <PreviewItem label="Product" value="Name" />
                    <PreviewItem label="Description" value="Product Description" />
                    <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
                </PreviewBody>
                <PreviewFooter>
                    <PreviewButton primary>Action</PreviewButton>
                </PreviewFooter>
            </Preview>
        );

        it(`should have 'weui-form-preview' class name`, ()=>{
            assert(wrapper.hasClass(`weui-form-preview`))
        });

        it(`should have 'weui-form-preview__hd' class name`, ()=>{
            assert(wrapper.find(PreviewHeader).shallow().hasClass(`weui-form-preview__hd`))
        });

        it(`should have 'weui-form-preview__bd' class name`, ()=>{
            assert(wrapper.find(PreviewBody).shallow().hasClass(`weui-form-preview__bd`))
        });

        it(`should have 'weui-form-preview__ft' class name`, ()=>{
            assert(wrapper.find(PreviewFooter).shallow().hasClass(`weui-form-preview__ft`))
        });

        it(`should have 3 PreviewItem`, ()=>{
            assert(wrapper.find(PreviewBody).shallow().find(PreviewItem).length === 3)
        });

        const $item = wrapper.find(PreviewBody).shallow().find(PreviewItem).first().shallow()

        it(`PreviewItem should have 'weui-form-preview__item' class name`, ()=>{
            assert($item.hasClass(`weui-form-preview__item`))
        });

        it(`PreviewItem should have label with 'weui-form-preview__label' class name`, ()=>{
            assert($item.find('label').hasClass(`weui-form-preview__label`))
        });

        it(`PreviewItem should have em with 'weui-form-preview__value' class name`, ()=>{
            assert($item.find('em').hasClass(`weui-form-preview__value`))
        });

        it(`PreviewItem should have label with text Product`, ()=>{
            assert($item.find('label').text() == 'Product')
        });

        it(`PreviewItem should have value with text Name`, ()=>{
            assert($item.find('em').text() == 'Name')
        });
    });

});
import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const { ButtonArea, Button } = WeUI;

describe('<ButtonArea></ButtonArea>', () => {
    [undefined, null, '', 'vertical', 'horizontal'].map((direction) => {
        [undefined, null, '', 'custom_class'].map((className) => {
            describe(`<ButtonArea className="${className} direction="${direction}></ButtonArea>`, () => {
                const child = <Button>确定</Button>;
                const wrapper = shallow(
                    <ButtonArea className={className} direction={direction}>
                        {child}
                    </ButtonArea>
                );

                it(`should render a <ButtonArea></ButtonArea> component`, () => {
                    assert(wrapper.instance() instanceof ButtonArea);
                });

                it(`should have 'weui-btn-area' class name`, () => {
                    assert(wrapper.hasClass(`weui-btn-area`));
                });

                it(`should have custom class name ${className}`, () => {
                    if (className) {
                        assert(wrapper.hasClass(`${className}`));
                    }
                });

                it(`should have 'weui-btn-area_inline' when direction equal 'horizontal'`, () => {
                    if (direction === 'horizontal') {
                        assert(wrapper.hasClass(`weui-btn-area_inline`));
                    }
                    else {
                        assert(!wrapper.hasClass(`weui-btn-area_inline`));
                    }
                });

                it(`should have children`, () => {
                    assert(wrapper.find(Button).html() === shallow(child).html());
                });
            });
        });
    });
});

import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import WeUI from '../src/index';

const {Toptips} = WeUI;

describe('<Toptips></Toptips>', () => {

    ['default', 'warn', 'info', 'primary'].map((type) => {
        [true, false].map((show) => {
            describe(`<Toptips show="${show}" type="${type}">tips</Toptips>`, () => {
                const customClassName = 'custom-class-name';
                const text = 'tips';
                const wrapper = shallow(
                    <Toptips show={show} type={type} className={customClassName}>{text}</Toptips>
                );

                it('should have default className `weui-toptips`', () => {
                    assert(wrapper.hasClass('weui-toptips'));
                });

                it(`should have className weui-toptips_${type}`, () => {
                    assert(wrapper.hasClass(`weui-toptips_${type}`));
                });

                it(`should have custom className ${customClassName}`, () => {
                    assert(wrapper.hasClass(`${customClassName}`));
                });

                it(`should display block when show is true, and display none when show is false`, () => {
                    if (show) {
                        assert(wrapper.prop('style').display === 'block');
                    }
                    else {
                        assert(wrapper.prop('style').display === 'none');
                    }
                });

                it(`should have text 'tips'`, () => {
                    assert(wrapper.text() === text);
                });
            });
        });
    });
});

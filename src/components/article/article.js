/**
 * Created by jf on 15/12/11.
 */



import React from 'react';
import classNames from 'classnames';

export default class Article extends React.Component {
    render() {
        const {className, children, ...others} = this.props;
        const cls = classNames({
            weui_article: true,
            [className]: className
        });
        return (
            <article className={cls} {...others}>
                {children}
            </article>
        );
    }
};
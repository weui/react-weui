/**
 * Created by n7best
 */


import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class Uploader extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        maxCount: PropTypes.number,
        maxWidth: PropTypes.number,
        onChange: PropTypes.func,
        onError: PropTypes.func,
        files: PropTypes.array,
        lang: PropTypes.object
    };

    static defaultProps = {
        title: '图片上传',
        maxCount: 4,
        maxWidth: 500,
        files: [],
        onChange: undefined,
        onError: undefined,
        lang:{
            maxError: maxCount => `最多只能上传${maxCount}张图片`
        }
    };

    handleFile(file,cb) {
        let reader;
        if(typeof FileReader !== 'undefined') {
           reader = new FileReader();
        } else {
           if(window.FileReader) reader = new window.FileReader();
        }

        reader.onload = e => {
            let img;
            if(typeof Image !== 'undefined') {
               img = new Image();
            } else {
               if(window.Image) img = new window.Image();
            }
            img.onload = ()=>{
                let w = Math.min(this.props.maxWidth, img.width);
                let h = img.height * (w / img.width);
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');

                //check canvas support, for test
                if(ctx){
                    canvas.width = w;
                    canvas.height = h;
                    ctx.drawImage(img, 0, 0, w, h);

                    let base64 = canvas.toDataURL('image/png');

                    cb({
                        lastModified: file.lastModified,
                        lastModifiedDate: file.lastModifiedDate,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        data: base64
                    },e);
                }else{
                    cb(file, e);
                }
            };
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }

    handleChange(e) {
        const langs = this.props.lang;
        let _files = e.target.files;

        if(_files.length === 0) return;

        if(this.props.files.length >= this.props.maxCount) {
            this.props.onError(langs.maxError(this.props.maxCount));
            return;
        }

        for(let key in _files) {
            if (!_files.hasOwnProperty(key)) continue;
            let file = _files[key];

            this.handleFile(file, (_file,e)=>{
                if(this.props.onChange) this.props.onChange(_file, e);
                ReactDOM.findDOMNode(this.refs.uploader).value='';
            },e);
        }
    }

    renderFiles(){
        return this.props.files.map((file, idx)=>{
            let {url, error, status, ...others} = file;
            let fileStyle = {
                backgroundImage: `url(${url})`
            };
            let cls = classNames({
                weui_uploader_file: true,
                weui_uploader_status: error || status
            });

            return (
                <li className={cls} key={idx} style={fileStyle} {...others}>
                    {
                        error || status ?
                        <div className="weui_uploader_status_content">
                            { error ? <i className="weui_icon_warn"></i> : status }
                        </div>
                        : false
                    }
                </li>
            );
        });
    }

    render(){
        const { className, title, maxCount, files, onChange, ...others } = this.props;
        const cls = classNames({
            weui_uploader: true,
            [className]: className
        });

        return (
            <div className={cls}>
                <div className="weui_uploader_hd weui_cell">
                    <div className="weui_cell_bd weui_cell_primary">{title}</div>
                    <div className="weui_cell_ft">{files.length}/{maxCount}</div>
                </div>
                <div className="weui_uploader_bd">
                    <ul className="weui_uploader_files">
                        {this.renderFiles()}
                    </ul>
                    <div className="weui_uploader_input_wrp">
                        <input
                        ref="uploader"//let react to reset after onchange
                        className="weui_uploader_input"
                        type="file"
                        accept="image/jpg,image/jpeg,image/png,image/gif"
                        onChange={this.handleChange.bind(this)}
                        {...others}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

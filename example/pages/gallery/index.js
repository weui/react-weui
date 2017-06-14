import React, { Component } from 'react';
import Page from '../../component/page';
import { Gallery, GalleryDelete, Button, Icon } from '../../../src/index';
import imgSrc from '../uploader/photo.png';
import imgSrc2 from './2.png';
import imgSrc3 from './3.png';

class GalleryDemo extends Component {
    constructor(props){
        super(props)

        this.state = {
            showSingle: false,
            showMultiple: false,
        }
    }

    render(){

        const BackButtonStyle = {
            display: 'inline-block',
            width: 'auto',
            color: 'white',
            border: 'none',
            position: 'absolute',
            top: '5px',
            left: '15px'
        }

        return (
            <Page className="gallery" title="Gallery" subTitle="画廊，可实现上传图片的展示或幻灯片播放">

                <div
                    style={{ padding: '0 15px'}}
                >
                    <Button
                        type="default"
                        onClick={e=>this.setState({ showSingle: true})}
                    >
                    Show Single Image
                    </Button>
                    <Button
                        type="default"
                        onClick={e=>this.setState({ showMultiple: true})}
                    >
                    Show Multiple Images
                    </Button>
                </div>

                <Gallery src={imgSrc} show={this.state.showSingle}>
                    <Button
                        style={BackButtonStyle}
                        onClick={e=>this.setState({ showSingle: false})}
                        plain
                    >
                        Back
                    </Button>
                    <GalleryDelete
                        onClick={ (e, i)=> alert('click deleted id:' + i) }
                    />
                </Gallery>

                <Gallery src={[imgSrc, imgSrc2, imgSrc3]} show={this.state.showMultiple}>
                    <Button
                        style={BackButtonStyle}
                        onClick={e=>this.setState({ showMultiple: false})}
                        plain
                    >
                        Back
                    </Button>
                    <GalleryDelete
                        onClick={ (e, i)=> alert('click deleted id:' + i) }
                    />
                </Gallery>
            </Page>
        )
    }
}

export default GalleryDemo;
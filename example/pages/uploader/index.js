import React, {Component} from 'react';
import Page from '../../component/page';
import { Gallery, GalleryDelete, Uploader, Form, Cell, CellBody } from '../../../build/packages';
import photoSrc from './photo.png';
import thumbSrc from './thumb.png';

class UploaderDemo extends Component {
    constructor(props){
        super(props)

        this.state = {
            gallery: false,
            demoFiles : [
                {
                    url: thumbSrc,
                },
                {
                    url: photoSrc
                },
                {
                    url: thumbSrc
                },
                {
                    url: photoSrc,
                    error: true
                },
                {
                    url: thumbSrc,
                    status: '50%'
                }
            ]
        };
    }

    renderGallery(){
        if(!this.state.gallery) return false;

        let srcs = this.state.demoFiles.map(file=>file.url)

        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery.id}
                onClick={ e=> {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation();
                    this.setState({gallery: false})
                }}
            >

                <GalleryDelete onClick={ (e, id)=> {
                    this.setState({
                        demoFiles: this.state.demoFiles.filter((e,i)=>i != id),
                        gallery: this.state.demoFiles.length <= 1 ? true : false
                    })
                }} />

            </Gallery>
        )
    }

    render(){
        return (
            <Page className="cell" title="Uploader" subTitle="上传组件，一般配合Gallery使用">
                { this.renderGallery() }
                <Form>
                    <Cell>
                        <CellBody>
                            <Uploader
                                title="Image Uploader"
                                maxCount={6}
                                files={this.state.demoFiles}
                                onError={msg => alert(msg)}
                                onChange={(file,e) => {
                                    let newFiles = [...this.state.demoFiles, {url:file.data}];
                                    this.setState({
                                        demoFiles: newFiles
                                    });
                                }}
                                onFileClick={
                                    (e, file, i) => {
                                        console.log('file click', file, i)
                                        this.setState({
                                            gallery: {
                                                url: file.url,
                                                id: i
                                            }
                                        })
                                    }
                                }
                                lang={{
                                    maxError: maxCount => `Max ${maxCount} images allow`
                                }}
                            />
                        </CellBody>
                    </Cell>
                </Form>
            </Page>
        );
    }
}

export default UploaderDemo;
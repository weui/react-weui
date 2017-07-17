import React from 'react';
import {
    Swiper,
    CellsTitle,
    Flex,
    FlexItem
} from '../../../build/packages';
import Page from '../../component/page';
import imgSrc from '../article/pic_article.png';

class SwiperDemo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            demoIndex: 0
        };
    }

    render(){
        return (
        <Page className="swiper" title="Swiper" subTitle="轮播" >

            <CellsTitle>Horizontal - Current slide: {this.state.demoIndex}</CellsTitle>
            <div style={{border: '1px solid #eee', background: '#f8f8f8'}}>
                <Swiper
                    height={150}
                    onChange={ (prev, next) => this.setState({demoIndex: next}) }
                >
                    <img src={imgSrc} role="presentation" />
                    <div style={{ padding: '5px', boxSizing: 'border-box', textAlign: 'center' }}>
                        <Flex>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                        </Flex>
                    </div>
                    <div style={{ background: '#39CCCC' }} />
                    <div style={{ background: '#0074D9' }} />
                </Swiper>
            </div>

            <CellsTitle>Vertical</CellsTitle>

            <div style={{border: '1px solid #eee', background: '#f8f8f8', marginBottom: '30px'}}>
                <Swiper
                    height={150}
                    direction="vertical"
                >
                    <img src={imgSrc} role="presentation" />
                    <div style={{ padding: '5px', boxSizing: 'border-box', textAlign: 'center' }}>
                        <Flex>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                        </Flex>
                        <Flex>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                            <FlexItem>
                                <div className="placeholder">weui</div>
                            </FlexItem>
                        </Flex>
                    </div>
                    <div style={{ background: '#39CCCC' }} />
                    <div style={{ background: '#0074D9' }} />
                </Swiper>
            </div>
        </Page>
        );
    }
}

export default SwiperDemo;

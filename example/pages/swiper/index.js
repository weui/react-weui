import React from 'react';
import {
    Swiper,
    CellsTitle,
    Flex,
    FlexItem
} from '../../../src/index';
import Page from '../../component/page';

class SwiperDemo extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            demoIndex: 0
        }
    }

    render(){
        return (
        <Page className="swiper" title="Swiper" subTitle="轮播" >

            <CellsTitle>Horizontal - Current slide: {this.state.demoIndex}</CellsTitle>
            <div style={{border: '1px solid #eee', background: '#f8f8f8'}}>
                <Swiper
                    height={200}
                    onChange={ (prev, next) => this.setState({demoIndex: next}) }
                >
                    <img src="https://source.unsplash.com/OrgLz7cjFIc/1600x900" role="presentation" />
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
                    <img src="https://source.unsplash.com/v3QeAZjxxtY/1600x900" role="presentation" />
                </Swiper>
            </div>

            <CellsTitle>Vertical</CellsTitle>

            <div style={{border: '1px solid #eee', background: '#f8f8f8', marginBottom: '30px'}}>
                <Swiper
                    height={200}
                    direction="vertical"
                >
                    <img src="https://source.unsplash.com/OrgLz7cjFIc/1600x900" role="presentation" />
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
                    <img src="https://source.unsplash.com/v3QeAZjxxtY/1600x900" role="presentation" />
                </Swiper>
            </div>
        </Page>
        )
    }
}

export default SwiperDemo;
import React from 'react';
import {
    Badge, Cells, Cell, CellBody, CellFooter, CellHeader, CellsTitle
} from '../../../src/index';
import Page from '../../component/page';
import iconSrc from '../list/images/icon.png';

const BadgeDemo = (props) => (
    <Page className="badge" title="Badge" subTitle="徽章">
        <CellsTitle>Footer Notification Badge</CellsTitle>
        <Cells>
            <Cell access>
                <CellBody>Label</CellBody>
                <CellFooter>
                    Details
                    <Badge dot preset="footer" />
                </CellFooter>
            </Cell>
        </Cells>

        <CellsTitle>Header & Body Badge</CellsTitle>
        <Cells>
            <Cell>
                <CellHeader style={{position: 'relative', marginRight: '10px'}}>
                    <img src={iconSrc} style={{width: '50px', display: 'block'}} />
                    <Badge preset="header">8</Badge>
                </CellHeader>
                <CellBody>
                    <p>Contact Name</p>
                    <p style={{fontSize: '13px', color: '#888888'}}>Descriptions</p>
                </CellBody>
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">8</Badge>
                </CellBody>
                <CellFooter />
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">8</Badge>
                </CellBody>
                <CellFooter>
                    Details
                </CellFooter>
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">new</Badge>
                </CellBody>
                <CellFooter />
            </Cell>
        </Cells>
    </Page>
);

export default BadgeDemo;
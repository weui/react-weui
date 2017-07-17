import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Globe from '../components/globe';
import FontAwesome from 'react-fontawesome';
import {
    Button, Flex, FlexItem,
    Footer,
    FooterText,
} from '../../build/packages';
import { Link } from 'react-router-dom';
import './start.less';

class Start extends Component {
    componentDidMount() {
        this.canvasInit();
    }

    componentWillUnmount(){
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        let context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        let w = canvas.width;
        canvas.width = 1;
        canvas.width = w;
    }

    canvasInit() {
        let container = ReactDOM.findDOMNode(this.refs.container);
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        let context = canvas.getContext('2d');

        let W = canvas.width = container.clientWidth;
        let H = canvas.height = container.clientHeight;
        //
        // Add the Generator Here :)
        //
        let generator1 = new particleGenerator(0, H + 2, W, 0, 10);

        function drawTriangle(context, x, y, triangleWidth, triangleHeight, fillStyle) {
            context.save();
            context.translate(0, -triangleHeight / 2);
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + triangleWidth / 2, y + triangleHeight);
            context.lineTo(x - triangleWidth / 2, y + triangleHeight);
            context.restore();
            context.closePath();
            context.strokeStyle = fillStyle;
            context.stroke();
        }

        function drawCircle(context, x, y, radius, fillStyle) {
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.closePath();
            context.strokeStyle = fillStyle;
            context.stroke();
        }

        function drawCross(context, fillStyle) {
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, 10);

            context.moveTo(-6, 5);
            context.lineTo(6, 5);

            context.closePath();
            context.strokeStyle = fillStyle;
            context.stroke();
        }

        function randomIntgf(min, max) {
            return Math.floor(min + Math.random() * (max - min + 1));
        }

        function randomInt(min, max) {
            return min + Math.random() * (max - min);
        }

        function clamp(value, min, max) {
            return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
        }

        function particle(x, y, type) {
            this.radius = randomInt(.1, 3);
            this.angleturn = randomInt(-.08, .08);
            this.angle = randomInt(1, 0);
            this.type2 = randomIntgf(0, 3);

            this.x = x;
            this.y = y;
            this.vx = randomInt(-1, 1);
            this.vy = randomInt(-2, 0);
            this.type = type;
        }
        particle.prototype.update = function() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += -0.08;
            this.vx *= 0.99;
            this.vy *= 0.99;
            this.angle += this.angleturn;
            this.radius -= .01;
            context.beginPath();
            //	context.globalAlpha=1;
            context.globalAlpha = this.radius;

            context.lineWidth = 2;
            context.lineCap = 'round';

            context.save();
            context.translate(this.x, this.y);
            context.rotate(this.angle);

            if (this.type2 === 0) {
                drawTriangle(context, 0, 0, 45, 38, '#08bb07');
            }
            else if (this.type2 === 1) {
                drawCircle(context, 0, 0, 35, '#ffbe00');

            }
            else if (this.type2 === 2) {
                context.beginPath();
                context.rect(0, 0, 35, 35);
                context.closePath();
                context.strokeStyle = '#298ceb';
                context.stroke();
            }
            else if (this.type2 === 3) {
                drawCross(context, '#D68FFF');
            }

            context.restore();

            context.globalAlpha = 1;
            if (this.y > H + 5) {
                this.vy *= -.5;
            }
            if (this.x > W || this.x < 0) {
                this.vx *= -1;
            }
        };

        function particleGenerator(x, y, w, h, number, text) {
            // particle will spawn in this aera
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.number = number;
            this.particles = [];
            this.text = text;
        }
        particleGenerator.prototype.animate = function() {

            context.fillStyle = 'grey';

            context.beginPath();
            context.strokeRect(this.x, this.y, this.w, this.h);

            context.closePath();

            if (this.particles.length < this.number) {
                this.particles.push(new particle(clamp(randomInt(this.x, this.w + this.x), this.x, this.w + this.x),
                clamp(randomInt(this.y, this.h + this.y), this.y, this.h + this.y), this.text));
            }
            for (var i = 0; i < this.particles.length; i++) {
                let p = this.particles[i];
                p.update();
                if (p.radius < .01 || p.y < 0) {
                    //a brand new particle replacing the dead one
                    this.particles[i] = new particle(clamp(randomInt(this.x, this.w + this.x), this.x, this.w + this.x),
                    clamp(randomInt(this.y, this.h + this.y), this.y, this.h + this.y), this.text);
                }
            }
        };

        update();

        function update() {
            context.clearRect(0, 0, W, H);
            generator1.animate();
            requestAnimationFrame(update);
        }
    }

    render() {
        const { langs } = this.props;
        const lang = langs['start'];
        return (
            <div className="start">
                <div className="start-banner" ref="container">
                    <canvas className="start-banner-canvas" ref="canvas"></canvas>
                    <div className="start-banner-inner">
                        <div className="start-banner-inner__left">
                            <div className="card">
                                <div className="card-inner">
                                    <FontAwesome name="weixin" size="4x" style={{ fontSize: '100px', color: '#fff' }}/>
                                </div>
                                <div className="card-home" />
                            </div>

                            <div className="big-circle"></div>
                            <div className="white-circle"><div className="angolo"></div></div>
                            <div className="small-circle"></div>
                        </div>
                        <div className="start-banner-inner__text">
                            <h2>React WeUI</h2>
                            <p className="desc">{ lang.bannerHeading }</p>
                            <div className="actions">
                                <Button plain target="_blank" href="http://weui.github.io/react-weui">{ lang.demo }</Button>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="start-box-announcement">
                    <p>
                        { lang.annc }
                    </p>
                </div>
                <div className="start-box-features">
                    <div className="start-box-features-inner">
                        <Flex>
                            <FlexItem>
                                <Link to="/docs/2/articles/0" className="start-box-features-item color-green">
                                    <FontAwesome name="play-circle" size="4x"/>
                                    <p>{ lang.getstart }</p>
                                </Link>
                            </FlexItem>
                            <FlexItem>
                                <Link to="/docs/1/articles/0" className="start-box-features-item color-blue">
                                    <FontAwesome name="th" size="4x" />
                                    <p>{ lang.component }</p>
                                </Link>
                            </FlexItem>
                            <FlexItem>
                                <a href="https://github.com/weui/react-weui" target="_blank" className="start-box-features-item color-og">
                                    <FontAwesome name="github" size="4x"/>
                                    <p>{ lang.github }</p>
                                </a>
                            </FlexItem>
                        </Flex>
                    </div>
                </div>
                <div className="start-box-footer">
                    <div className="start-box-footer-inner">
                        <Footer>
                            <FooterText>{ lang.footer }</FooterText>
                            <FooterText>Copyright &copy; 2008-2016 weui.io</FooterText>
                        </Footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Start;
//<Button className="card-button">Get Started</Button>

// <div className="card-logo">
//     <Globe />
// </div>

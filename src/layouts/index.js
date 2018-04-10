import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import "../style/layout-override.css";
import Media from 'react-media'

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <title>Full Court Analysis</title>
            <link href="https://fonts.googleapis.com/css?family=Jua" rel="stylesheet"/>
            <link rel="shortcut icon" href="./favicon.ico"/>
        </Helmet>
        <Header />
        <div
            className="background"
            style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%"
            }}
        >
            <QuadBounce
                duration={1150}
                start={0}
                end={160}
            >
                { value => <Ball y={value} /> }
            </QuadBounce>,
            <Media query={{ maxWidth: 848 }}>
                {matches =>
                    matches ? (
                        <div
                            style={{
                                margin: "0 auto",
                                maxWidth: 980,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                height: "100%",
                                padding: "25px"
                            }}
                        >
                            <div  style={{ flex: 1 }}>{children()}</div>
                        </div>
                    ) : (
                        <div
                            className="parent"
                            style={{
                                margin: "0 auto",
                                maxWidth: 980,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                height: "100%",
                                padding: "25px"
                            }}
                        >
                            <div style={{ flex: 4, paddingRight: "30px" }}>
                                {children()}
                            </div>
                            <div  style={{ width: '210px'}}>
                                <SidebarTop
                                    title="About the Blog"
                                    description="This blog is going to be mainly about analyzing NBA teams and players using
                                    statistical visualization  tools like R and TABLEAU to represent trends. Hoping to
                                     anticipate performance patterns
                                    and using statistical modeling methods such as simple linear regression to anticipate and
                                    analyze current team standings and reasons behind it."

                                />
                                <SidebarBot
                                    title="About the Author"
                                    description="Third year Honours Statistics student at the University of Waterloo
                                    with a huge passion for data science and basketball. Feel free to shoot me an email
                                     for suggestions about the blog. Also you can check out some of my other cool stuff
                                     I built on my github/website"
                                    link1 = 'https://mail.google.com/mail/?view=cm&fs=1&to=r6deng@edu.uwaterloo.ca'
                                    link2 = 'http://www.raymonddeng.com'
                                />
                            </div>
                        </div>
                    )
                }
            </Media>
        </div>
    </div>
);

const SidebarBot = (props) => (
    <div
        className="side"
        style={{
            position:'relative',
            border: '2px solid #e6e6e6',
            maxWidth:960,
            padding: '0.5rem',
            marginBottom: '25px',
            paddingRight:'0px'

        }}
    >

        <strong className="side-title">{props.title}</strong><br/> <br/>{props.description}<br/>
        <a href={props.link1}> Email</a> <a href={props.link2}>Website</a>
    </div>
);

const SidebarTop = (props) => (
    <div
        className="side"
        style={{
            position:'relative',
            border: '2px solid #e6e6e6',
            maxWidth:960,
            padding: '0.5rem',
            marginBottom: '25px',
            paddingRight:'0px'

        }}
    >

        <strong className="side-title">{props.title}</strong> <br/><br/>{props.description}<br/>
    </div>
);

const getPosition = (elapsedTime, h, k) => {
    const a = (4 * k) / Math.pow(h * 2, 2);


    const ypos = a * Math.pow((((elapsedTime + h) % (h * 2)) - h), 2);

    return ypos;
};


const style = {
    display: 'block',
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#FF7F50',
};


const Ball = ({ y }) => (
    <div
        style={{
            ...style,
            top: y,
        }}
    />
);


class QuadBounce extends React.Component {
    state = {
        beginning: Date.now(),
    }

    componentWillMount() {
        this.setState({ interval: setInterval(this.updateValue, 20) });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    updateValue = () => {
        const {
            props: {
                duration,
                start,
                end,
            },
            state: {
                beginning,
            },
        } = this;

        const time = Date.now() - beginning;
        const value = start + getPosition(time, duration / 2, end - start);
        this.setState({ value });
    };

    render() {
        const renderedChildren = this.props.children(this.state.value);
        return renderedChildren && React.Children.only(renderedChildren);
    }
}



TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

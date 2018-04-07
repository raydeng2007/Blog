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
            <title>ABC</title>
            <link rel="shortcut icon" href="./favicon.ico"/>
        </Helmet>
        <Header />
        <div
            style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%"
            }}
        >
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
                            <div style={{ flex: 1 }}>{children()}</div>
                        </div>
                    ) : (
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
                            <div style={{ flex: 4, paddingRight: "30px" }}>
                                {children()}
                            </div>
                            <div style={{ width: '210px'}}>
                                <Sidebar
                                    title="NBA Stats"
                                    description="Analyzing stats from "
                                />
                                <Sidebar
                                    title="About author"
                                    description="I am a Data scientist"
                                />
                            </div>
                        </div>
                    )
                }
            </Media>
        </div>
    </div>
);

const Sidebar = (props) => (
    <div
        style={{
            border: '2px solid #e6e6e6',
            maxWidth: 960,
            padding: '0.5rem',
            marginBottom: '25px'
        }}
    >
        <strong>{props.title}</strong> <br/>{props.description}
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

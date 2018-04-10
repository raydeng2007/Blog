import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
    <div
        className="background"
        style={{
            marginBottom: '3rem',
            borderBottom: '2px solid #e6e6e6',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 980,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{margin: 0, textAlign: 'center',fontSize: '45px'}}>
                <Link to="/"
                      style={{
                          color: 'black',
                          textDecoration: 'none',
                      }}
                >
                    FULL COURT ANALYSIS

                </Link>


            </h1>
        </div>
    </div>
);



export default Header

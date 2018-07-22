import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'
import { NextStatelessComponent } from 'next'

const JumbotronButton = styled.button`
  width: 150px;
  margin: 0 5px;
`

const CaptionNumber = styled.span`
  border-radius: 50%;
  background: #111;
  line-height: 28px;
  color: #fff;
  margin-right: 24px;
  text-align: center;
  width: 28px;
  height: 28px;
  font-size: 14px;
`

const Logo = styled.a`
  height: 24px;
  width: 28px;
  display: block;
  margin-right: 10px;

  > svg {
    margin-top: 5px;
  }

  &:hover > svg > g > g {
    stroke: #900;
  }
`

export interface HomePageProps {}

const Home: NextStatelessComponent<HomePageProps> = () => (
  <div>
    <style>{css`
      body {
        background: radial-gradient(
          circle,
          #d7d7d7,
          #d7d7d7 1px,
          #fff 1px,
          #fff
        );
        background-size: 28px 28px;
      }
    `}</style>
    <div className="container">
      <div className="navbar px-0 navbar-expand-md navbar-light">
        <Logo href="/">
          <svg
            viewBox="0 0 39 35"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <polygon id="path-1" points="491.5 29 511 64 472 64" />
              <mask
                id="mask-2"
                maskContentUnits="userSpaceOnUse"
                maskUnits="objectBoundingBox"
                x="0"
                y="0"
                width="39"
                height="35"
                fill="white"
              >
                <polygon id="path-1" points="491.5 29 511 64 472 64" />
              </mask>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              strokeDasharray="6,4"
            >
              <g
                id="/logos"
                transform="translate(-472.000000, -29.000000)"
                stroke="#000000"
                strokeWidth="4"
              >
                <polygon
                  id="Triangle-3"
                  mask="url(#mask-2)"
                  points="491.5 29 511 64 472 64"
                />
              </g>
            </g>
          </svg>
        </Logo>
        <div className="navbar-nav mr-auto">
          <div className="nav-item">
            <Link href="/blog">
              <a href="" className="nav-link">
                Blog
              </a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/blog">
              <a href="" className="nav-link">
                Now
              </a>
            </Link>
          </div>
          <div className="nav-item">
            <a href="" className="nav-link">
              World
            </a>
          </div>
        </div>
        <div className="navbar-nav">
          <div className="nav-item">
            <a href="" className="nav-link tc-primary">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container pb-4">
      <div className="jumbotron-1 ta-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="56"
          className="mb-3"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#000"
              d="M26.4975598 0C11.8659873 0 0 11.4760513 0 25.633467c0 11.3249885 7.59234476 20.9316377 18.1227171 24.321109 1.3258541.2360356 1.8090181-.5554704 1.8090181-1.235253 0-.6089718-.0227754-2.2203083-.03579-4.3587909-7.3710979 1.5483936-8.9263329-3.4366784-8.9263329-3.4366784-1.20546975-2.9614601-2.94290798-3.749819-2.94290798-3.749819-2.40605912-1.5893065.18220326-1.5578351.18220326-1.5578351 2.65984222.1809607 4.05890302 2.6420253 4.05890302 2.6420253 2.3637619 3.9166175 6.2030449 2.7852202 7.712729 2.1290412.2407686-1.6553964.9256576-2.7852202 1.6821265-3.4256635-5.8841892-.6467376-12.07096593-2.8465894-12.07096593-12.6688178 0-2.7978088 1.03302743-5.0873542 2.72816843-6.8780777-.2733049-.6483111-1.1826943-3.2557178.2602904-6.7836633 0 0 2.2238559-.689224 7.2865036 2.6278631 2.1132324-.5696326 4.3810123-.8528754 6.6341508-.8638903 2.2515117.0110149 4.5176648.2942577 6.6341508.8638903 5.0593941-3.3170871 7.2799964-2.6278631 7.2799964-2.6278631 1.4462383 3.5279455.5368488 6.1353522.2651708 6.7836633 1.6983946 1.7907235 2.723288 4.0802689 2.723288 6.8780777 0 9.8474055-6.1965377 12.0142124-12.0986218 12.6483614.9500598.7915061 1.7976303 2.3556354 1.7976303 4.7458893 0 3.427237-.0325363 6.1920008-.0325363 7.0322875 0 .6860769.4782836 1.4838772 1.8220326 1.2336795C45.4141625 46.5556633 53 36.9553083 53 25.633467 53 11.4760513 41.1340127 0 26.4975598 0"
            />
            <g stroke="#000" transform="translate(37 35)">
              <circle cx="10" cy="10" r="10" fill="#FFF" strokeWidth=".625" />
              <path
                strokeWidth="2"
                d="M6 9.98494089l2.91552757 2.78019561L14.6806641 7"
              />
            </g>
          </g>
        </svg>
        <h2 className="tw-normal mb-3">Now + GitHub</h2>
        <p className="mb-4 ts-medium tc-muted">
          Automatic deployments on every pull request. Just push.
        </p>
        <JumbotronButton className="btn btn--size-medium btn-primary tw-normal">
          Setup now
        </JumbotronButton>
        <JumbotronButton className="btn btn--size-medium tw-normal btn-outline-muted">
          Learn more
        </JumbotronButton>
      </div>
      <div className="container container--md px-0">
        <div className="card-item media p-3">
          <CaptionNumber>1</CaptionNumber>
          <div className="media-body">
            <h5>Pull Request</h5>
            <p className="tc-muted-dark">
              GitHub pull requests are an ever evolving environment. We
              constantly push our changes to them so we can work with everyone
              live and share our code for collaboration.
            </p>
          </div>
        </div>
        <div className="card-item media p-3">
          <CaptionNumber>2</CaptionNumber>
          <div className="media-body">
            <h5>Deploy</h5>
            <p className="tc-muted-dark">
              We don’t just read code, we want to see our changes live. Using
              Now to deploy our apps whenever there’s a change and sharing the
              links for review. Now we can do it automatically.
            </p>
          </div>
        </div>

        <div className="card-item media p-3">
          <CaptionNumber>3</CaptionNumber>
          <div className="media-body">
            <h5>Ready</h5>
            <p className="tc-muted-dark">
              Now for GitHub deploys your apps whenever you submit a pull
              request or make changes to existing pull requests. No longer
              having to manually deploy with your changes; your colleagues can
              grab the latest link straight from your pull request whenever you
              push. Fast and easy!
            </p>
          </div>
        </div>

        <div className="card bg-muted mt-4 p-3" />
      </div>
    </div>
  </div>
)

export default Home

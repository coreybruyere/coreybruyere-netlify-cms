import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import Img from 'gatsby-image'
import graphql from 'graphql';
import Hero from '../components/Hero';

export default class workArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
  }

  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container container mx-auto px-4">
          <Hero heading="Latest Work"></Hero>

          {posts.filter(post => post.node.frontmatter.templateKey === 'work').map(({ node: post }) => (
            <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={post.id}>
              <p>
                <Link className="has-text-primary" to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                {console.log(post)}
                <small>{post.frontmatter.date}</small>
              </p>
              {/* <Img sizes={post.frontmatter.desk.childImageSharp.sizes} /> */}
              <img src={post.frontmatter.desktopimage} alt="" />
              <img src={post.frontmatter.tabletimage} alt=""/>
              <img src={post.frontmatter.mobileimage} alt=""/>
              <p>
                {post.excerpt}
                <br />
                <br />
                <CtaLink to={post.frontmatter.path}>Keep Reading →</CtaLink>
              </p>
            </div>
            ))}
        </div>
      </section>
    );
  }
}

export const workArchivePageQuery = graphql`
  query WorkArchiveQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY")
            path
            desktopimage
            tabletimage
            mobileimage
          }
        }
      }
    }
  }
`;

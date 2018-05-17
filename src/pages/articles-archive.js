import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import graphql from 'graphql';
import Hero from '../components/Hero';

export default class archivePage extends React.Component {
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
        <div className="container mx-auto px-4">
          <Hero heading="Articles"></Hero>

          {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => (
            <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={post.id}>
              <p>
                <Link className="has-text-primary" to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
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

export const archivePageQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

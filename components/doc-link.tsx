import React from 'react';
import {default as NextLink} from 'next/link';
import {Link} from 'prismic-reactjs';
import {linkResolver} from '../prismic-config';
import {LinkField} from '@prismicio/types';

interface DocLinkProps {
  link: LinkField;
  linkClass?: string;
}

// Main DocLink component function for generating links to other pages on this site
export default class DocLink extends React.Component<DocLinkProps> {

  render() {
    const {children, link, linkClass} = this.props;
    if (link) {

      // If the link is an internal link, then return a NextLink
      if (link.link_type === 'Document' && 'uid' in link) {
        return (
          <NextLink href={linkResolver(link)}>
            <a className={linkClass}>{children}</a>
          </NextLink>
        );
      }

      // Otherwise return a normal anchor element
      return (
        <a className={linkClass} href={Link.url(link)}>{children}</a>
      );
    }
    return null;
  }
};

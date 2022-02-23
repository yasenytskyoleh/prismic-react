import React from 'react';
import Image from 'next/image';
import {ImageFieldImage, LinkField} from '@prismicio/types';
import DocLink from './doc-link';

export interface MenuProps {
  logo: ImageFieldImage;
  menu_tabs: LinkField[];
  pages: LinkField[];
  topPromoBanner: string;
}

export default class Menu extends React.Component<MenuProps> {

  render() {
    return (
      <header className="relative bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex">
              <div className="ml-4 flex lg:ml-0 flex items-center">
                <DocLink link="/" linkClass="relative h-12 w-12">
                  { this.props.logo?.url &&
                    <Image src={this.props.logo.url} alt={this.props.logo?.alt || ''} layout="fill"/>
                  }
                </DocLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}


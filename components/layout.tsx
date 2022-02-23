import React from 'react';
import Menu, {MenuProps} from './menu';
import {PrismicResponseDto} from '../interfaces/prismic-response';

export interface LayoutProps {
  menu: PrismicResponseDto<MenuProps>;
  footer: PrismicResponseDto<any>;
}

export default class Layout extends React.Component<LayoutProps> {

  render() {
    const {children, menu, footer} = this.props;
    return (
      <div>
        <Menu {...menu.data}/>
        {children}
      </div>
    );
  }
}

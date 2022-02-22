import '../styles/globals.css';
import {PrismicClient} from '../prismic-config';
import NextApp, {AppInitialProps} from 'next/app';
import {PrismicResponseDto} from '../interfaces/prismic-response';

export interface AppLayoutInitialProps extends AppInitialProps {
  props: {
    menu: PrismicResponseDto<any>
    footer: PrismicResponseDto<any>;
  };
}


export default class MyApp extends NextApp<AppLayoutInitialProps> {

  static async getInitialProps(): Promise<AppLayoutInitialProps> {
    const menu = (await PrismicClient.getSingle('menu')) || {};
    const footer = (await PrismicClient.getSingle('footer')) || {};
    return {
      pageProps: null,
      props: {
        menu: menu,
        footer: footer,
      },
    };
  }

  render() {
    const {Component, pageProps, props} = this.props;
    return (
      <Component {...pageProps} menu={props.menu} footer={props.footer}/>
    );
  }
}

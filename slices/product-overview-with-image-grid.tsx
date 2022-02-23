import {SliceComponentPropsDto} from './index';
import React from 'react';
import {ProductPreviewInfoDto} from './interfaces';
import {RichTextField, RTListItemNode} from '@prismicio/types';
import {PrismicRichText} from '@prismicio/react';

export interface ProductOverviewWithImageGridPrimary {
  readonly product: ProductPreviewInfoDto;
  readonly description: RichTextField;
  readonly details: RichTextField;
  readonly highlights: RTListItemNode[];
}

type ProductListWithCtaProps = SliceComponentPropsDto<[], ProductOverviewWithImageGridPrimary>;

export default class ProductOverviewWithImageGrid extends React.Component<ProductListWithCtaProps> {
  public primary: ProductOverviewWithImageGridPrimary;

  constructor(props: ProductListWithCtaProps) {
    super(props);
    this.primary = props.slice.primary;
  }

  render(): JSX.Element | null {
    return (
      <div className="pt-6">
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {this.primary?.product?.imageSrc &&
						<div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
							<img src={this.primary.product.imageSrc} alt={this.primary.product.imageAlt}
							     className="w-full h-full object-center object-cover"/>
						</div>
          }
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            {this.primary?.product?.imageSrc &&
		          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
			          <img src={this.primary.product.imageSrc} alt={this.primary.product.imageAlt}
			               className="w-full h-full object-center object-cover"/>
		          </div>
            }
            {this.primary?.product?.imageSrc &&
		          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
			          <img src={this.primary.product.imageSrc} alt={this.primary.product.imageAlt}
			               className="w-full h-full object-center object-cover"/>
		          </div>
            }
          </div>

          {this.primary?.product?.imageSrc &&
		        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
			        <img src={this.primary.product.imageSrc} alt={this.primary.product.imageAlt}
			             className="w-full h-full object-center object-cover"/>
		        </div>
          }
        </div>
        <div
          className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:gap-x-8">
          <div className="lg:col-span-2  lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {this.primary?.product?.name}
            </h1>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8">
            <PrismicRichText field={this.primary?.description}/>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul className="pl-4 list-disc text-sm space-y-2 mt-4">{
                  this.primary?.highlights?.length &&
                  this.primary.highlights.map((item, index) =>
                    <li key={index} className="text-gray-600">{item?.text}</li>,
                  )
                }</ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                Details
              </h2>
              <div className="mt-4 space-y-6">
                <PrismicRichText field={this.primary?.details}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

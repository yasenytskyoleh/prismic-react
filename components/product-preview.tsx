import React from 'react';
import Image from 'next/image';
import {ProductPreviewInfoDto} from '../slices/interfaces';

interface ProductPreviewProps {
  data: ProductPreviewInfoDto;
}

export default class ProductPreview extends React.Component<ProductPreviewProps> {

  render() {
    return (
      <div className="group relative">
        <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80 relative">
          {this.props.data?.imageSrc &&
						<Image src={this.props.data.imageSrc} alt={this.props.data.imageAlt} layout="fill"
						       objectFit="cover"
						       className="w-full h-full object-center object-cover relative"/>
          }
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{this.props.data?.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{this.props.data?.color}</p>
        <p className="mt-1 text-sm font-medium text-gray-900">{this.props.data?.price}</p>
      </div>
    );
  }
}

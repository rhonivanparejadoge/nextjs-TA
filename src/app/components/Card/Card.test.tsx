import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemCard from './Card';
import styles from './Card.module.scss';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe('ItemCard Component', () => {
  const title = 'Test Title';
  const image = '/test-image.png';
  const id = 0;

  it('should render in the document', () => {
    const { getByText, getByAltText } = render(<ItemCard id={id} title={title} image={image} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByAltText(title)).toHaveAttribute('src', image);
  });

  it('component has max width', () => {
    const { container } = render(<ItemCard id={id} title={title} image={image} />);
    expect(container.firstChild).toHaveStyle('maxWidth: 345px');
  });

  it('have a proper class', () => {
    const { container } = render(<ItemCard id={id} title={title} image={image} />);
    expect(container.firstChild).toHaveClass(styles.Card);
  });
});
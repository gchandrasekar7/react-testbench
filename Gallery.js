import ImageGallery from 'react-image-gallery';
import React from 'react';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
 
class MyComponent extends React.Component {
 
  render() {
 
    const images = [
      {
        original: 'http://4.bp.blogspot.com/_5c9ckXM1thk/TNGC9-uulHI/AAAAAAAAAG4/9j0kyfLByqY/s1600/tagore.JPG',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}

export default MyComponent;
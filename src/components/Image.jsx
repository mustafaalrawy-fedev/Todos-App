import { useState, useEffect, memo } from 'react';
import { preload } from 'react-dom';

const Image = ({
  src,
  alt = '',
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'blur',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority && src) preload(src, { as: 'image' });
  }, [src, priority]);

  const placeholderClasses = `${className} bg-gray-500 animate-pulse`;
  const imageClasses = `${className} transition-opacity duration-300 ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  } ${placeholder === 'blur' && !isLoaded ? 'blur-sm' : ''}`;

  return (
    <div className='relative' style={{ width, height }}>
      {!isLoaded && (
        <div className={placeholderClasses} style={{ width, height }} />
      )}
      <img
        src={src}
        alt={alt}
        className={imageClasses}
        loading={priority ? 'eager' : 'lazy'}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        style={{ width, height }}
      />
    </div>
  );
};

export default memo(Image);

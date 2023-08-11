function SlideItem({ src, className }) {
  return <img className={`w-full h-full object-cover ${className}`} src={src} alt="slide" />;
}

export default SlideItem;

import styles from './RotatingPhoto.module.css';
import useIntersection from '@/hooks/useIntersection';

export default function RotatingPhoto() {

  const [elementRef, isIntersecting] = useIntersection({});

  return (
    <div
      className={`${styles.photoCont} ${isIntersecting ? styles.visible : ''}`}
      ref={elementRef}
    />
  );
}
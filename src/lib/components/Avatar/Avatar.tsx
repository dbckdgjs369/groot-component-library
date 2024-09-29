import styles from "./style.module.css";

export default function Avatar({
  src,
  alt = "avatar",
  size,
}: {
  alt?: string;
  src: string;
  size?: number;
}) {
  return (
    <img
      className={styles.avatar}
      alt={alt}
      src={src}
      width={size}
      height={size}
    />
  );
}

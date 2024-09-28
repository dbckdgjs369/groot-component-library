import "./style.css";

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
    <img className="avatar" alt={alt} src={src} width={size} height={size} />
  );
}

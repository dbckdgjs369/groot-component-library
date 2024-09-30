import * as S from "./style";

export default function Avatar({
  src,
  alt = "avatar",
  size,
}: {
  alt?: string;
  src: string;
  size?: number;
}) {
  return <S.StyledAvatar alt={alt} src={src} width={size} height={size} />;
}

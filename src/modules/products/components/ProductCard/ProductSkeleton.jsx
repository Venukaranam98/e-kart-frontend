import * as S from "./ProductSkeleton.styles";

export default function ProductSkeleton() {
  return (
    <S.SkeletonCard>
      <S.SkeletonImage />
      <S.SkeletonContent>
        <S.SkeletonCategory />
        <S.SkeletonTitle />
        <S.SkeletonDescriptionLine />
        <S.SkeletonDescriptionLine />
        <S.SkeletonFooter>
          <S.SkeletonPrice />
          <S.SkeletonButton />
        </S.SkeletonFooter>
      </S.SkeletonContent>
    </S.SkeletonCard>
  );
}

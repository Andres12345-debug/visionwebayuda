import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import heroImg from "../../../../assets/img/welcome/GlpiAgente.png";
import SectionHeroSplitBase from "../shared/SectionHeroSplitBase";
import GradientText from "../ui/GradientText";

type SectionHeroSplitProps = {
  image?: string;
  title?: ReactNode;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function SectionHeroSplit({
  image = heroImg,
  subtitle,
  title,
  description,
  buttonText,
  buttonLink = "#",
}: SectionHeroSplitProps) {
  const { t } = useTranslation();

  return (
    <SectionHeroSplitBase
      image={image}
      imageAlt="Inventario Profesional - Software de gestión de activos TI VisionWeb"
      imagePosition="right"
      subtitle={subtitle ?? t("heroSplit.subtitle")}
      title={
        title ?? (
          <>
            {t("heroSplit.titlePart1")}
            <GradientText>{t("heroSplit.titleHighlight")}</GradientText>
            {t("heroSplit.titlePart2")}
          </>
        )
      }
      description={description ?? t("heroSplit.description")}
      buttonText={buttonText ?? t("heroSplit.buttonText")}
      buttonLink={buttonLink}
    />
  );
}

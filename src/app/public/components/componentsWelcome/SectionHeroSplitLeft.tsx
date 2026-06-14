import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import heroImg from "../../../../assets/img/welcome/MesaDeAyuda.png";
import SectionHeroSplitBase from "../shared/SectionHeroSplitBase";
import GradientText from "../ui/GradientText";

type SectionHeroSplitLeftProps = {
  image?: string;
  title?: ReactNode;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function SectionHeroSplitLeft({
  image = heroImg,
  subtitle,
  title,
  description,
  buttonText,
  buttonLink = "#",
}: SectionHeroSplitLeftProps) {
  const { t } = useTranslation();

  return (
    <SectionHeroSplitBase
      image={image}
      imageAlt="Mesa de ayuda profesional - Plataforma de soporte técnico VisionWeb"
      imagePosition="left"
      subtitle={subtitle ?? t("heroSplitLeft.subtitle")}
      title={
        title ?? (
          <>
            {t("heroSplitLeft.titlePart1")}
            <GradientText>{t("heroSplitLeft.titleHighlight")}</GradientText>
            {t("heroSplitLeft.titlePart2")}
          </>
        )
      }
      description={description ?? t("heroSplitLeft.description")}
      buttonText={buttonText ?? t("heroSplitLeft.buttonText")}
      buttonLink={buttonLink}
    />
  );
}

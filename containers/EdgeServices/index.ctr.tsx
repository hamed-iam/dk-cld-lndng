import { useTranslation } from "next-i18next";
import StyledWrapper from "./edgeServicesCtr.style";
import { CaseStudy, Faq, SuccessStory } from "@/components";
import {
  EdgeFeaturesSection,
  EdgePricingSection,
} from "@/components/PageEdgeServices";
import { SolutionsSection, ProductDefineSection } from "@/components";

const EdgeServicesCtr = () => {
  const { t } = useTranslation("edge-services");

  const edgeDefineCards = [
    {
      title: t("define.features.0.title"),
      desc: t("define.features.0.desc"),
    },
    {
      title: t("define.features.1.title"),
      desc: t("define.features.1.desc"),
    },
    {
      title: t("define.features.2.title"),
      desc: t("define.features.2.desc"),
    },
    {
      title: t("define.features.3.title"),
      desc: t("define.features.3.desc"),
    },
    {
      title: t("define.features.4.title"),
      desc: t("define.features.4.desc"),
    },
  ];

  const solutionsCards = [
    {
      title: "title1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
    {
      title: "title2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
    {
      title: "title3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
    {
      title: "title4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
    {
      title: "title5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam.",
    },
  ];

  const caseStudyPanels = [
    {
      key: "1",
      panelHeader: "ارتقای امنیت وب‌سایت و افزایش سرعت بارگذاری",
      panelContent:
        "با استفاده از شبکه توزیع محتوای دیجی‌کلاد و استفاده از خدمات رایانش ابری، رمزگذاری و فشرده‌سازی فایل‌ها می‌توانید در کسری از ثانیه به میلیون‌ها مخاطب در سراسر جهان دسترسی داشته باشید.",
    },
    {
      key: "2",
      panelHeader: "تسریع فرایند توزیع محتوا و API",
      panelContent:
        "با کمک زیرساخت پیشرفته و پرقابلیت دیجی‌کلاد می‌توانید فرایند توزیع و تحویل محتوای وب‌سایت خود را بهینه‌سازی کنید و با سرعت بالا در اختیار کاربران‌تان قرار دهید.",
    },
    {
      key: "3",
      panelHeader: "پخش زنده و استریم ویدیو",
      panelContent:
        "شبکه توزیع محتوای دیجی‌کلاد این امکان را در اختیارتان می‌گذارد تا در هر زمان که بخواهید پخش زنده ویدیویی داشته باشید، محتوای ویدیویی خود را به صورت پایدار پخش کنید و به دست مخاطبان خود برسانید.",
    },
    {
      key: "4",
      panelHeader: "توزیع پچ‌های امنیتی و بروزرسانی‌های نرم‌افزاری",
      panelContent:
        "استفاده از شبکه توزیع محتوای دیجی‌کلاد به شما اجازه می‌دهد تا در هر زمان که بخواهید پچ‌های امنیتی و بروزرسانی‌های نرم‌افزاری خود را در مقیاس",
    },
  ];

  const successStoryCards = [
    {
      id: 1,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "diginextLogo", viewBox: "0 0 74 17" },
    },
    {
      id: 2,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 3,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 4,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
    {
      id: 5,
      title: "eCommerce Solution",
      desc: "Diginext uses Digicloud's edge services for their next generation eCommerce solutions.",
      logo: { title: "digikalaLogo", viewBox: "0 0 68 16" },
    },
  ];

  return (
    <StyledWrapper>
      <ProductDefineSection
        cards={edgeDefineCards}
        superTitle={t("define.super-h1")}
        title={t("define.h1")}
        desc={t("define.desc")}
        icon={{
          title: "edgeServicesPageIcon",
          viewBox: "0 0 72 72",
        }}
      />

      <EdgeFeaturesSection
        superTitle={t("approach.super-h1")}
        desc={t("approach.sub")}
      />
      <SolutionsSection cards={solutionsCards} />
      <SuccessStory
        cards={successStoryCards}
        imageSrc="/assets/edgeStoryHero.png"
        mainTitle={t("success.h2")}
        desc={t("success.desc")}
      />
      <EdgePricingSection
        superTitle={t("pricing.super")}
        desc={t("pricing.desc")}
        icon={{
          title: "ghostEmojiIcon",
          viewBox: "0 0 40 40",
        }}
      />
      <CaseStudy
        title={t("usecase.h2")}
        desc={t("usecase.desc")}
        panels={caseStudyPanels}
      />
      <Faq
        loc="edge-services"
        links={{
          next: { href: "/oss", text: t("faq.links.next") },
          back: { href: "/cloud-computing", text: t("faq.links.back") },
        }}
      />
    </StyledWrapper>
  );
};

export default EdgeServicesCtr;

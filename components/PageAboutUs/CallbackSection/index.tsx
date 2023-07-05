import { Input, TextArea } from "@/components/DataEntry";
import SvgIcon from "@/components/SvgIcon";
import { Col, Row } from "antd";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import StyleWrapper from "./callbackSection.style";

export default function CallbackSection() {
  const { t } = useTranslation("about");

  const items = [
    {
      icon: { name: "aboutCloudComutingIcon", viewBox: "0 0 48 48" },
      title: t("aboutus.callback.items.0.title"),
      desc: t("aboutus.callback.items.0.desc"),
    },
    {
      icon: { name: "aboutObjectStorageIcon", viewBox: "0 0 48 48" },
      title: t("aboutus.callback.items.1.title"),
      desc: t("aboutus.callback.items.1.desc"),
    },
    {
      icon: { name: "aboutEdgeServicesIcon", viewBox: "0 0 48 48" },
      title: t("aboutus.callback.items.2.title"),
      desc: t("aboutus.callback.items.2.desc"),
    },
  ];

  const { handleSubmit, control, getFieldState } = useForm({
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleInputChange = (value: string) => {
    console.log("Input value:", value);
  };

  return (
    <StyleWrapper>
      <Row>
        <Col
          className="w-100"
          xl={{ span: 12 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <div className="callback">
            <div className="callback-title">
              <h1>{t("aboutus.callback.title")}</h1>
            </div>
            <p>{t("aboutus.callback.title-desc")}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-label">
                {t("aboutus.callback.form.title")}
              </div>
              <Input
                placeholder="example: digikala"
                control={control}
                onChange={handleInputChange}
                name="company"
              />
              <div className="form-label">
                {t("aboutus.callback.form.email")}
              </div>
              <Input
                placeholder="example: o.askarian@difikala.com"
                control={control}
                onChange={handleInputChange}
                name="email"
              />
              <div className="form-label">
                {t("aboutus.callback.form.call-number")}
              </div>
              <Input
                placeholder="Example: +989120001122"
                control={control}
                onChange={handleInputChange}
                name="number"
              />
              <div className="form-label">
                {t("aboutus.callback.form.desc")}
              </div>
              <TextArea
                control={control}
                onChange={handleInputChange}
                name="description"
              />
              <Button
                htmlType="submit"
                type="primary"
                disabled={!!getFieldState("input").error}
                size="large"
              >
                {t("aboutus.callback.form.submit")}
              </Button>
            </form>
          </div>
        </Col>
        <Col
          xl={{ span: 1 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          className="w-100 seperator"
        >
          <div className="icon-wrapper">
            <div className="icon-wrapper-up">
              <SvgIcon title="callbackArrowUpIcon" viewBox="0 0 72 72" />
            </div>
            <div className="icon-wrapper-down">
              <SvgIcon title="callbackArrowDownIcon" viewBox="0 0 72 73" />
            </div>
          </div>
        </Col>
        <Col
          className="w-100"
          xl={{ span: 11 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <div className="products">
            {items.map((item, index) => {
              return (
                <div className="products-card" key={index}>
                  <div className="products-card-title">
                    <SvgIcon
                      title={item.icon.name}
                      viewBox={item.icon.viewBox}
                    />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                  {index < items.length - 1 ? (
                    <div className="products-card-seperator">. . .</div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </StyleWrapper>
  );
}

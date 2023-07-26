import { Input, TextArea } from "@/components/DataEntry";
import SvgIcon from "@/components/SvgIcon";
import { Col, Row } from "antd";
import { Button } from "antd";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import StyleWrapper from "./callbackSection.style";

export default function CallbackSection() {
  const { t } = useTranslation("about");
  const titlePlaceholder = t("callback.form.title-placeholder");
  const emailPlaceholder = t("callback.form.email-placeholder");
  const numberPlaceholder = t("callback.form.call-number-placeholder");

  const items = [
    {
      icon: { name: "aboutCloudComutingIcon", viewBox: "0 0 48 48" },
      title: t("callback.items.0.title"),
      desc: t("callback.items.0.desc"),
    },
    {
      icon: { name: "aboutObjectStorageIcon", viewBox: "0 0 48 48" },
      title: t("callback.items.1.title"),
      desc: t("callback.items.1.desc"),
    },
    {
      icon: { name: "aboutEdgeServicesIcon", viewBox: "0 0 48 48" },
      title: t("callback.items.2.title"),
      desc: t("callback.items.2.desc"),
    },
  ];

  const { handleSubmit, control, getFieldState } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = (data: any) => {
    axios
      .post("https://api.digicloud.dev/v1/early-access-request", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInputChange = (value: string) => {
    console.log("Input value:", value);
  };

  return (
    <StyleWrapper>
      <Row className="container" id="callback">
        <Col
          className="w-100 callback-wrapper"
          xl={{ span: 12 }}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <div className="callback">
            <div className="icon-wrapper">
              <div className="icon-wrapper-up">
                <SvgIcon title="callbackArrowUpIcon" viewBox="0 0 72 72" />
              </div>
              <div className="icon-wrapper-down">
                <SvgIcon title="callbackArrowDownIcon" viewBox="0 0 72 73" />
              </div>
            </div>
            <div className="callback-title">
              <h1>{t("callback.title")}</h1>
            </div>
            <p>{t("callback.title-desc")}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-label">{t("callback.form.title")}</div>
              <Input
                placeholder={titlePlaceholder}
                control={control}
                onChange={handleInputChange}
                name="name"
              />
              <div className="form-label">{t("callback.form.email")}</div>
              <Input
                placeholder={emailPlaceholder}
                control={control}
                onChange={handleInputChange}
                name="email"
              />
              <div className="form-label">{t("callback.form.call-number")}</div>
              <Input
                placeholder={numberPlaceholder}
                control={control}
                onChange={handleInputChange}
                name="phone"
              />
              <div className="form-label">{t("callback.form.desc")}</div>
              <TextArea
                control={control}
                onChange={handleInputChange}
                name="description"
              />
              <div>
                <Button
                  htmlType="submit"
                  type="primary"
                  disabled={!!getFieldState("name").error}
                  size="large"
                >
                  {t("callback.form.submit")}
                </Button>
              </div>
            </form>
          </div>
        </Col>
        <Col
          className="w-100 products-wrapper"
          xl={{ span: 12 }}
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

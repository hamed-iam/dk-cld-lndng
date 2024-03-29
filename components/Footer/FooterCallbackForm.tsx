import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { Input } from "../DataEntry";
import { FooterCallbackStyledWrapper } from "./footer.style";
import axios from "axios";
import { Button, message } from "antd";

const FooterCallbackForm = () => {
  const { t } = useTranslation("common");

  const { handleSubmit, control, getFieldState } = useForm({
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = (data: any) => {
    axios
      .post("https://api.digicloud.dev/v1/early-access-request", data)
      .then(function (response) {
        message.success(t("callback.form.success-msg"));
      })
      .catch(function (error) {
        message.error(error.message);
      });
  };

  const handleInputChange = (value: string) => {
    console.log("Input value:", value);
  };

  return (
    <FooterCallbackStyledWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Email or Phone Number"
          control={control}
          onChange={handleInputChange}
          name="input"
        />

        <Button
          htmlType="submit"
          type="primary"
          disabled={!!getFieldState("input").error}
        >
          {t("footer.callback.submit")}
        </Button>
      </form>
    </FooterCallbackStyledWrapper>
  );
};

export default FooterCallbackForm;

import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { Input } from "../DataEntry";
import { FooterCallbackStyledWrapper } from "./footer.style";
import { Button } from "antd";

const FooterCallbackForm = () => {
  const { t } = useTranslation("common");

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

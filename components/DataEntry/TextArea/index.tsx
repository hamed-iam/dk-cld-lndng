import { Control, Controller } from "react-hook-form";
import { Input } from "antd";
import { useTranslation } from "next-i18next";
import { InputStyleWrapper } from "../dataEntry.style";

interface RHFTextAreaProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

const { TextArea } = Input;

const RHFTextArea = (props: RHFTextAreaProps) => {
  const { t } = useTranslation("common");
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: props.required ? (t("form.error") as string) : false,
      }}
      render={({ field, fieldState }) => {
        return (
          <InputStyleWrapper>
            <TextArea
              rows={4}
              placeholder={props.placeholder}
              status={fieldState.error ? "error" : undefined}
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value}
              onChange={(e) => {
                console.log(e);
                field.onChange(e.target.value);
                if (props.onChange) {
                  props.onChange(e.target.value);
                }
              }}
              className="text-area"
            />

            <br />
            {fieldState.error ? (
              <span style={{ color: "red" }}>
                {fieldState.error?.message}
                <br />
              </span>
            ) : null}
          </InputStyleWrapper>
        );
      }}
    />
  );
};

export default RHFTextArea;

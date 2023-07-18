import { Control, Controller } from "react-hook-form";
import { Input } from "antd";
import { useTranslation } from "react-i18next";

interface RHFInputFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const RHFInputField = (props: RHFInputFieldProps) => {
  const { t } = useTranslation("common");
  const errorMsg = t("form.error");
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: errorMsg,
      }}
      render={({ field, fieldState }) => {
        return (
          <>
            <Input
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
            />

            <br />
            {fieldState.error ? (
              <span style={{ color: "red", minWidth: "120px" }}>
                {fieldState.error?.message}
                <br />
              </span>
            ) : null}
            <br />
          </>
        );
      }}
    />
  );
};

export default RHFInputField;

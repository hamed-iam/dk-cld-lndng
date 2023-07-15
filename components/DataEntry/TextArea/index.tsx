import { Control, Controller } from "react-hook-form";
import { Input } from "antd";

interface RHFTextAreaProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const { TextArea } = Input;

const RHFTextArea = (props: RHFTextAreaProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: "This field is required",
      }}
      render={({ field, fieldState }) => {
        return (
          <>
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
              style={{ resize: "none" }}
            />

            <br />
            {fieldState.error ? (
              <span style={{ color: "red" }}>{fieldState.error?.message}</span>
            ) : null}
          </>
        );
      }}
    />
  );
};

export default RHFTextArea;

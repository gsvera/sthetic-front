/* eslint-disable @typescript-eslint/no-explicit-any */
import apiTypeService from "@/api/catalog";
import { apiProvider } from "@/api/provider";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import { REGEX } from "@/constans/Constans";
import { LadaType } from "@/constans/GeneralType";
import { useNotificationProvider } from "@/providers/NotificationProvider";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

type formRegistryProps = {
  formData: any;
  formHandlerSubmit: () => void;
};

const { useWatch } = Form;

export const FormRegistry = ({
  formData,
  formHandlerSubmit,
}: formRegistryProps) => {
  const { WarningNotification } = useNotificationProvider();
  const [form] = Form.useForm(formData);
  const [wFirstName, wLastName, wPhone, wEmail] = [
    useWatch("firstName", form),
    useWatch("lastName", form),
    useWatch("phone", form),
    useWatch("email", form),
  ];

  const { data: listLada } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.lada.getAll("lada")],
    queryFn: () => apiTypeService.getAllLada(),
    ...{
      select: (data: ResponseApi) => data.data.items as Array<LadaType>,
    },
  });

  const handleValidateData = async () => {
    try {
      await form.validateFields();
      const searchUser: ResponseApi = await apiProvider.findDuplicatedUser(
        wEmail,
        wPhone
      );

      if (searchUser.data.error) {
        WarningNotification(
          "Advertencia",
          "El correo que intenta ingresar ya se encuentra registrado"
        );
      } else {
        formHandlerSubmit();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card-subcribe-module form-registry">
      <h3 className="title-form">Información de usuario</h3>
      <Form form={form}>
        <div className="content-row-input">
          <div className="col-4-8">
            <Form.Item
              name={"firstName"}
              label="Nombre(s)"
              rules={[
                {
                  required: true,
                  message: "Campo obligatorio",
                },
                {
                  message: "Solo puede ingresar letras",
                  pattern: REGEX.ONLY_TEXT,
                },
              ]}
            >
              <Input
                placeholder="Ingrese su nombre"
                maxLength={100}
                suffix={`${wFirstName?.length || 0}/50`}
              />
            </Form.Item>
          </div>
          <div className="col-4-8">
            <Form.Item
              name={"lastName"}
              label="Apellido(s)"
              rules={[
                {
                  required: true,
                  message: "Campo obligatorio",
                },
                {
                  message: "Solo puede ingresar letras",
                  pattern: REGEX.ONLY_TEXT,
                },
              ]}
            >
              <Input
                placeholder="Ingrese su apellido"
                maxLength={100}
                suffix={`${wLastName?.length || 0}/50`}
              />
            </Form.Item>
          </div>
        </div>
        <div className="content-row-input">
          <div className="col-4-8">
            <Form.Item
              label="Lada"
              name={"lada"}
              rules={[
                {
                  required: true,
                  message: "Campo obligatorio",
                },
              ]}
            >
              <Select
                showSearch
                placeholder={
                  <div className="c-action">Seleccione una lada</div>
                }
                optionFilterProp="label"
                options={listLada?.map((item) => ({
                  value: item.lada,
                  label: `${item.code} ${item.lada}`,
                }))}
              />
            </Form.Item>
          </div>
          <div className="col-4-8">
            <Form.Item
              label="Teléfono"
              name={"phone"}
              rules={[
                {
                  required: true,
                  message: "Campo obligatorio",
                },
                {
                  pattern: REGEX.ONLY_NUMBER,
                  message: "Solo debe ingresar números",
                },
              ]}
            >
              <Input
                placeholder="Ingrese su número teléfonico"
                maxLength={13}
                suffix={`${wPhone?.length || 0}/13`}
              />
            </Form.Item>
          </div>
        </div>
        <div className="col-alone">
          <Form.Item
            label="email"
            name={"email"}
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
              {
                pattern: REGEX.EMAIL,
                message: "Ingrese un email valido",
              },
            ]}
          >
            <Input
              placeholder="Ingrese su email"
              maxLength={50}
              suffix={`${wEmail?.length || 0}/50`}
            />
          </Form.Item>
        </div>
        <div className="content-row-input">
          <div className="col-4-8">
            <Form.Item
              name={"password"}
              label="Contraseña"
              rules={[
                {
                  required: true,
                  message: "Campo obligatorio",
                },
                {
                  pattern: REGEX.PASSWORD,
                  message:
                    "La contraseña debe incluir minimo 8 caracteres,  al menos una letra mayúscula una minuscula, un número y un carácter especial",
                },
              ]}
            >
              <Input.Password
                placeholder="Ingrese una contraseña"
                iconRender={(visible) =>
                  visible ? <IoEyeOutline /> : <IoEyeOffOutline />
                }
              />
            </Form.Item>
          </div>
          <div className="col-4-8">
            <Form.Item
              name={"confirmPassword"}
              label="Ingrese nuevamente su contraseña"
              rules={[
                { required: true, message: "Campo obligatorio" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Las contraseñas no coinciden")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Ingrese una contraseña"
                iconRender={(visible) =>
                  visible ? <IoEyeOutline /> : <IoEyeOffOutline />
                }
              />
            </Form.Item>
          </div>
        </div>
        <div className="d-flex">
          <Button className="btn-submit" onClick={handleValidateData}>
            Siguiente
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormRegistry;

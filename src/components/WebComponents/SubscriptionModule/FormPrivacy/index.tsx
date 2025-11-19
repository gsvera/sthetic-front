import { Button } from "antd";
import TextPrivacy from "../../TextPrivacy";

type formPrivacyProps = {
  prevHandler: () => void;
  nextHandler: () => void;
};

export const FormPrivacy = ({ prevHandler, nextHandler }: formPrivacyProps) => {
  return (
    <div className="card-subcribe-module form-privacy">
      <h3 className="title-form">Aviso de privacidad</h3>
      <div className="content-scroll-privacy">
        <TextPrivacy />
      </div>
      <div className="content-btn-b-n">
        <Button className="btn-back" onClick={prevHandler}>
          Regresar
        </Button>
        <Button className="btn-submit" onClick={nextHandler}>
          Aceptar terminos y condiciones
        </Button>
      </div>
    </div>
  );
};

export default FormPrivacy;

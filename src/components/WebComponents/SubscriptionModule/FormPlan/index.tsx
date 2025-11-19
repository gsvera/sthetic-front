import apiTypeService from "@/api/catalog";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import { PlanCardProps } from "@/constans/GeneralType";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import FormPlanItem from "./FormPlanItem";

type formPlanProps = {
  planSelected: number;
  handleSelectPlan: (plan: PlanCardProps) => void;
  prevHandler: () => void;
  nextHandler: () => void;
};

export const FormPlan = ({
  prevHandler,
  nextHandler,
  handleSelectPlan,
  planSelected,
}: formPlanProps) => {
  const { data: listPlan = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.plan.getAll("list-plan")],
    queryFn: () => apiTypeService.getAllPlan(),
    ...{
      select: (data: ResponseApi) => data.data.items as Array<PlanCardProps>,
    },
  });

  return (
    <div className="card-subcribe-module form-plan">
      <h3 className="title-form">Selecciona un plan</h3>
      <div className="content-scroll-plan f-wrap">
        {listPlan?.length > 0 &&
          listPlan.map((item) => (
            <FormPlanItem
              key={item.id}
              plan={item}
              handleSelect={handleSelectPlan}
              planSelected={planSelected}
            />
          ))}
      </div>
      <div className="content-btn-b-n">
        <Button className="btn-back" onClick={prevHandler}>
          Regresar
        </Button>
        <Button className="btn-submit" onClick={nextHandler}>
          Confirmar plan
        </Button>
      </div>
    </div>
  );
};

export default FormPlan;

import { PlanCardProps } from "@/constans/GeneralType";
import { Button } from "antd";

type formPlanItemProps = {
  plan: PlanCardProps;
  handleSelect: (id: PlanCardProps) => void;
  planSelected: number;
};

export const FormPlanItem = ({
  plan,
  handleSelect,
  planSelected,
}: formPlanItemProps) => {
  return (
    <div className="form-plan-item">
      <div
        className={`${
          planSelected === plan.id
            ? "item-card-plan-selected"
            : "item-card-plan"
        } `}
      >
        <div className="content-space-between mb-3">
          <div className="name-plan">{plan.name}</div>
          <div className="price-plan">
            ${plan.price} x{" "}
            {plan.duration > 1 ? `${plan.duration} meses` : "mes"}
          </div>
        </div>
        <div>
          {plan.planDetails.map((detail) => (
            <div key={detail.id} className="detail-item-plan">
              {detail.descriptionEs}
            </div>
          ))}
        </div>
        <div className="d-flex">
          <Button
            className="btn-select-plan"
            onClick={() => handleSelect(plan)}
          >
            Elegir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormPlanItem;

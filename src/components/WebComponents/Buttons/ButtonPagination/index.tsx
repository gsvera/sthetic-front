import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./index.scss";
import { useMemo } from "react";

type buttonPaginationProps = {
  totalPages: number;
  page: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
};

export const ButtonPagination = ({
  totalPages,
  page,
  handleNextPage,
  handlePrevPage,
}: buttonPaginationProps) => {
  const disableNextButton = useMemo(
    () => page + 1 === totalPages || totalPages === 0,
    [page, totalPages]
  );
  const disablePrevButton = useMemo(() => page + 1 === 1, [page]);
  const onChangeNextPage = () => {
    const nextPage = page + 1;

    handleNextPage(nextPage >= totalPages ? totalPages : nextPage);
  };
  const onChangePrevPage = () => {
    const prevPage = page - 1;
    handlePrevPage(prevPage <= 0 ? 0 : prevPage);
  };

  return (
    <div className="button-pagination">
      <button
        className="btn-pagination"
        onClick={onChangePrevPage}
        type="button"
        disabled={disablePrevButton}
      >
        <FiChevronLeft
          className={`${
            disablePrevButton ? "row-change-page-disabled" : "row-change-page"
          }`}
        />
      </button>
      <div style={{ margin: "0 10px" }}>
        {totalPages === 0 ? 0 : page + 1} de {totalPages}
      </div>
      <button
        className="btn-pagination"
        onClick={onChangeNextPage}
        type="button"
        disabled={disableNextButton}
      >
        <FiChevronRight
          className={`${
            disableNextButton ? "row-change-page-disabled" : "row-change-page"
          }`}
        />
      </button>
    </div>
  );
};

export default ButtonPagination;

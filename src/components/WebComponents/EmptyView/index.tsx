type emptyViewProps = {
  message?: string;
};

export const EmptyView = ({
  message = "No se encontraron registros",
}: emptyViewProps) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default EmptyView;

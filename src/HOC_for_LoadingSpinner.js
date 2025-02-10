const dataFetchWithLoadingSpinner = (WrappedComponent) => {
  return function WithLoading(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...restProps} />;
  };
};

// A sample component to wrap
const DataFetch = () => {
  return <div>This is the Data.</div>;
};

// Wrapping the component with HOC
export default dataFetchWithLoadingSpinner(DataFetch);

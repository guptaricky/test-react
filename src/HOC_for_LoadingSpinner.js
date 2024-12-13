
const DataFetchWithLoaderSpinner = (WrappedComponent)=>{
    return((isLoading, ...props)=>{
        if(isLoading){
            return <div>Loading</div>;
        }
        return (
            <WrappedComponent {...props} />
        );
    })
}


const DataFetch = (props) => <div> This is the Data</div>;

export default DataFetchWithLoaderSpinner(DataFetch);
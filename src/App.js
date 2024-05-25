import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ShowDataPage from "./page/components/showDataPage";

function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <div className={'w-screen h-screen overflow-y-hidden p-[16px] overflow-x-hidden'}>
                <ShowDataPage/>
            </div>
        </QueryClientProvider>
    );
}

export default App;

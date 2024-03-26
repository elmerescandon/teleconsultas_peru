import {useState} from "react";

type PageState = "loading" | "success" | "error";

const usePageState = (): {
  pageState: PageState;
  setSuccess: () => void;
  setError: (error: Error) => void;
  setLoading: () => void;
  errorMessage: string;
} => {
  const [pageState, setPageState] = useState<PageState>("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const setSuccess = () => {
    setPageState("success");
  };

  const setError = (error: Error) => {
    setPageState("error");
    setErrorMessage(error.message);
  };

  const setLoading = () => {
    setPageState("loading");
  };

  return {pageState, setSuccess, setError, setLoading, errorMessage};
};

export default usePageState;

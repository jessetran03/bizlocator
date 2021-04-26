import { createContext, useState } from 'react';

const BusinessDetailsContext = createContext({
  businessDetails: {},
  setBusinessDetails: () => {},
});
export default BusinessDetailsContext;

export const BusinessDetailsProvider = (props) => {
  const [businessDetails, setBusinessDetails] = useState({});

  const value = {
    businessDetails,
    setBusinessDetails,
  }
  return (
    <BusinessDetailsContext.Provider value={value}>
      {props.children}
    </BusinessDetailsContext.Provider>
  )
}
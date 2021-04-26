import { createContext, useState } from 'react';

const BusinessListContext = createContext({
  zipCode: 77056,
  totalBusinesses: null,
  businessList: [],
  setZipCode: () => {},
  setTotalBusinesses: () => {},
  setBusinessList: () => {},
});
export default BusinessListContext;

export const BusinessListProvider = (props) => {
  const [zipCode, setZipCode] = useState(77056);
  const [totalBusinesses, setTotalBusinesses] = useState();
  const [businessList, setBusinessList] = useState([]);

  const value = {
    zipCode,
    totalBusinesses,
    businessList,
    setZipCode,
    setTotalBusinesses,
    setBusinessList,
  }

  return (
    <BusinessListContext.Provider value={value}>
      {props.children}
    </BusinessListContext.Provider>
  )
}
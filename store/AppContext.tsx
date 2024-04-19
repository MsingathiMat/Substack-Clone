'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type UserDataProp = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type UserStateDataProps = {
  UserData: UserDataProp;
  SetUserData: Dispatch<SetStateAction<UserDataProp>>;
};

//  1. CREATE

const AppContext = createContext<UserStateDataProps | null>(null);

//  2. PROVIDE jsxElement wrapper

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [UserData, SetUserData] = useState<UserDataProp >(

    {
        albumId: 3,
        id: 5,
        title: "Coded",
        url: 'https://turntable.kagiso.io/images/trevor_noah_charlie_chaplin_award.width-800.jpg',
        thumbnailUrl: "https://turntable.kagiso.io/images/trevor_noah_charlie_chaplin_award.width-800.jpg"
      }
  );

  return (
    <AppContext.Provider value={{ UserData, SetUserData }}>
      {children}
    </AppContext.Provider>
  );
};

//  3. HOOK
const useAppProvider = () => {
  //  4.  USE
  const ContextInstance = useContext(AppContext);

  if (ContextInstance!==null) {
    const { UserData, SetUserData } = ContextInstance;

   
    return { UserData, SetUserData };
  }else{

    console.log("AppContext might have been used outside the provider")
  }
};

//  5. EXPORT

export { useAppProvider, AppProvider };

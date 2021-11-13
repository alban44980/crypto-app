export interface Crypto {
  dai: number;
  usdc: number;
  usdt: number;
}

export interface AddModalProps {
  addModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCapital: React.Dispatch<React.SetStateAction<number>>;
  setInvestAmounts: React.Dispatch<React.SetStateAction<Crypto>>;
}

export interface ManageModalProps {
  manageModal: boolean;
  setManageModal: React.Dispatch<React.SetStateAction<boolean>>;
  rates: Crypto;
  investRepartition: Crypto;
  setInvestRepartition: React.Dispatch<React.SetStateAction<Crypto>>;
  setInvestAmounts: React.Dispatch<React.SetStateAction<Crypto>>;
  capital: number;
}

export interface BottomItemProps {
  name: string;
  rate: number;
  investment: number;
}

export interface MainBottomProps {
  setManageModal: React.Dispatch<React.SetStateAction<boolean>>;
  rates: Crypto;
  investAmounts: Crypto;
}

export interface MainTopProps {
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  capital: number;
  rates: Crypto;
  investRepartition: Crypto;
  blendedRate: number;
  setBlendedRate: React.Dispatch<React.SetStateAction<number>>;
  investAmounts: Crypto;
}

export interface ManageItemsProps {
  crypto: string;
  color: string;
  rate: number;
  investRate: number;
  setUpdate: React.Dispatch<React.SetStateAction<Crypto>>;
}

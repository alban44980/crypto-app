export interface Crypto {
  dai: number;
  usdc: number;
  usdt: number;
}

export interface AddModalProps {
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  capital: number;
  setCapital: React.Dispatch<React.SetStateAction<number>>;
  setInvestAmounts: React.Dispatch<React.SetStateAction<Crypto>>;
  investRepartition: Crypto;
}

export interface ManageModalProps {
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
  color: string;
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

export interface GraphProps {
  capital: number;
  blendedRate: number;
}

export interface SliderItemProp {
  crypto: string;
  color: string;
  investRate: number;
  setUpdate: React.Dispatch<React.SetStateAction<Crypto>>;
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

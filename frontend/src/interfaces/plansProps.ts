export interface PlansProps {
  id: number;
  title: string;
  price: number;
  duration: string;
  isMain: boolean;
  plans: ListPlansProps[];
}

interface ListPlansProps {
  id_plan: number;
  description: string;
  isActive: boolean;
}

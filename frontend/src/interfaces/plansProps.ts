export interface PlansProps {
  id: number;
  title: string;
  price: number;
  duration: string;
  plans: [
    {
      id_plan: number;
      description: string;
    }
  ];
}
